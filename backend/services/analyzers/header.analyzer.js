function analyzeHeaders(headers) {
  const findings = [];
  let score = 0;
  const normalized = {};
  Object.keys(headers).forEach((key) => {
    normalized[key.toLowerCase()] = headers[key];
  });

  const checks = [
    { key: 'strict-transport-security', points: 5, check: 'hsts', message: 'Add Strict-Transport-Security with a max-age of at least 6 months.' },
    { key: 'content-security-policy', points: 8, check: 'csp', message: 'Add a Content-Security-Policy to restrict script and resource origins.' },
    { key: 'x-frame-options', points: 4, check: 'frame_options', message: 'Add X-Frame-Options: DENY or SAMEORIGIN to prevent clickjacking.' },
    { key: 'x-content-type-options', points: 3, check: 'nosniff', message: 'Add X-Content-Type-Options: nosniff.' },
    { key: 'permissions-policy', points: 3, check: 'permissions_policy', message: 'Add a Permissions-Policy to restrict browser feature access.' },
    { key: 'referrer-policy', points: 2, check: 'referrer_policy', message: 'Add a Referrer-Policy such as strict-origin-when-cross-origin.' }
  ];

  checks.forEach(({ key, points, check, message }) => {
    if (normalized[key]) {
      score += points;
    } else {
      findings.push({ check, severity: 'medium', message });
    }
  });

  return {
    category: 'headers',
    hsts: !!normalized['strict-transport-security'],
    csp: !!normalized['content-security-policy'],
    xFrameOptions: !!normalized['x-frame-options'],
    score,
    maxScore: 25,
    findings
  };
}

module.exports = { analyzeHeaders };