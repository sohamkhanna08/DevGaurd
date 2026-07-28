const Scan = require('../models/Scan');

const { normalizeUrl, validateUrl } = require('./validators/url.validator');
const { validateSSRF } = require('./validators/ssrf.validator');

const { collectRedirectData } = require('./collectors/redirect.collector');
const { collectTLSData } = require('./collectors/tls.collector');

const { analyzeRedirect } = require('./analyzers/redirect.analyzer');
const { analyzeHeaders } = require('./analyzers/header.analyzer');
const { analyzeCookies } = require('./analyzers/cookie.analyzer');
const { analyzeTLS } = require('./analyzers/tls.analyzer');
const { analyzeCertificate } = require('./analyzers/certificate.analyzer');

const { calculateScore } = require('./scoring.service');
const { generateRecommendations } = require('./recommendation.service');
const { safelyAnalyze } = require('../utils/safelyAnalyze');

const SCANNER_VERSION = '1.1.0';

async function createScanService(url, userId) {
  const startedAt = Date.now();

  const normalizedUrl = normalizeUrl(url);
  validateUrl(normalizedUrl);
  await validateSSRF(normalizedUrl);

  const redirectData = await collectRedirectData(normalizedUrl);

  let tlsData = null;
  let tlsCollectionError = null;
  try {
    tlsData = await collectTLSData(redirectData.finalUrl);
  } catch (err) {
    tlsCollectionError = err.message;
  }

  const redirectAnalysis = safelyAnalyze('redirect', analyzeRedirect, redirectData, 10);
  const headerAnalysis = safelyAnalyze('headers', analyzeHeaders, redirectData.headers, 25);
  const cookieAnalysis = safelyAnalyze('cookies', analyzeCookies, redirectData.cookies, 15);

  const tlsAnalysis = tlsData
    ? safelyAnalyze('tls', analyzeTLS, tlsData)
    : { category: 'tls', score: 0, maxScore: 30, findings: [], error: tlsCollectionError };

  const certificateAnalysis = tlsData
    ? safelyAnalyze('certificate', analyzeCertificate, tlsData)
    : { category: 'certificate', score: 0, maxScore: 20, findings: [], error: tlsCollectionError };

  const analyses = {
    redirect: redirectAnalysis,
    headers: headerAnalysis,
    cookies: cookieAnalysis,
    tls: tlsAnalysis,
    certificate: certificateAnalysis
  };

  const hasError = Object.values(analyses).some((a) => a.error);
  const status = hasError ? 'partial' : 'completed';

  const score = calculateScore(analyses);
  const recommendations = await generateRecommendations(analyses);

  const scan = await Scan.create({
    user: userId,
    url: normalizedUrl,
    finalUrl: redirectData.finalUrl,
    status,
    redirect: redirectAnalysis,
    headers: headerAnalysis,
    cookies: cookieAnalysis,
    tls: tlsAnalysis,
    certificate: certificateAnalysis,
    score,
    recommendations,
    metadata: {
      scanDurationMs: Date.now() - startedAt,
      scannerVersion: SCANNER_VERSION
    }
  });
 
  return scan;
}

async function getAllScansService(userId) {
  return Scan.find({ user: userId }).sort({ createdAt: -1 });
}

async function getScanByIdService(scanId, userId) {
  return Scan.findOne({ _id: scanId, user: userId });
}

async function deleteScanService(scanId, userId) {
  return Scan.findOneAndDelete({ _id: scanId, user: userId });
}

module.exports = {
  createScanService,
  getAllScansService,
  getScanByIdService,
  deleteScanService
};