function hostMatchesCertName(hostname, certName) {
  if (certName.startsWith('*.')) {
    const suffix = certName.slice(1);
    const hostSuffix = hostname.slice(hostname.indexOf('.'));
    return hostname !== certName.slice(2) && hostSuffix === suffix;
  }
  return hostname === certName;
}

function analyzeCertificate(tlsData) {
  const findings = [];
  let score = 0;
  const cert = tlsData.cert || {};
  const hostname = tlsData.hostname;

  const isSelfSigned = cert.issuer && cert.subject &&
    JSON.stringify(cert.issuer) === JSON.stringify(cert.subject);

  if (!isSelfSigned && tlsData.authorized) {
    score += 8;
  } else {
    findings.push({
      check: 'trusted_ca',
      severity: 'critical',
      message: isSelfSigned
        ? 'Certificate is self signed. Use a certificate from a publicly trusted CA.'
        : `Certificate chain is not trusted: ${tlsData.authorizationError}`
    });
  }

  const now = new Date();
  const validTo = cert.valid_to ? new Date(cert.valid_to) : null;
  const expiresInDays = validTo ? Math.floor((validTo - now) / (1000 * 60 * 60 * 24)) : -1;

  if (expiresInDays > 30) {
    score += 8;
  } else if (expiresInDays > 0) {
    score += 3;
    findings.push({
      check: 'cert_expiry',
      severity: 'medium',
      message: `Certificate expires in ${expiresInDays} days. Renew soon.`
    });
  } else {
    findings.push({
      check: 'cert_expiry',
      severity: 'critical',
      message: 'Certificate is expired. Renew immediately.'
    });
  }

  const sanEntries = (cert.subjectaltname || '')
    .split(',')
    .map((entry) => entry.trim().replace('DNS:', ''))
    .filter(Boolean);

  const nameMatches = sanEntries.some((name) => hostMatchesCertName(hostname, name));

  if (nameMatches) {
    score += 4;
  } else {
    findings.push({
      check: 'hostname_match',
      severity: 'critical',
      message: `Certificate does not cover hostname ${hostname}.`
    });
  }

  return {
    category: 'certificate',
    issuer: cert.issuer ? cert.issuer.O || cert.issuer.CN : null,
    subject: cert.subject ? cert.subject.CN : null,
    serialNumber: cert.serialNumber || null,
    validFrom: cert.valid_from ? new Date(cert.valid_from) : null,
    validTo: cert.valid_to ? new Date(cert.valid_to) : null,
    sanCount: sanEntries.length,
    expiresInDays,
    selfSigned: !!isSelfSigned,
    score,
    maxScore: 20,
    findings
  };
}

module.exports = { analyzeCertificate };