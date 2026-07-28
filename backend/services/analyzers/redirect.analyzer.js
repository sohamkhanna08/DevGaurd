const { URL } = require('url');

function analyzeRedirect(redirectData) {
  const findings = [];
  const chain = redirectData.chain;
  let score = 3;

  const first = chain[0];
  if (first.url.startsWith('http://')) {
    const secondHop = chain[1];
    if (secondHop && secondHop.url.startsWith('https://')) {
      score += 3;
    } else {
      findings.push({ check: 'https_enforcement', severity: 'high', message: 'Site does not redirect HTTP to HTTPS.' });
    }
  } else {
    score += 3;
  }

  if (chain.length > 4) {
    findings.push({ check: 'redirect_length', severity: 'low', message: `Redirect chain has ${chain.length} hops. Consider shortening it.` });
  } else {
    score += 2;
  }

  const domains = chain.map((hop) => new URL(hop.url).hostname);
  const uniqueDomains = new Set(domains);
  if (uniqueDomains.size > 2) {
    findings.push({ check: 'cross_domain_redirect', severity: 'medium', message: 'Redirect chain passes through multiple distinct domains, verify this is intentional.' });
  } else {
    score += 2;
  }

//   const redirectChain = chain.filter((val,idx)=> idx!=0);

  return {
    category: 'redirect',
    redirectCount: redirectData.redirectCount,
    finalUrl: redirectData.finalUrl,
    score,
    maxScore: 10,
    findings,
    // chain :redirectChain
  };
}

module.exports = { analyzeRedirect };