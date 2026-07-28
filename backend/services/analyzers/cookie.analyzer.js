function parseSetCookie(setCookieHeader) {
  if (!setCookieHeader) return [];
  const list = Array.isArray(setCookieHeader) ? setCookieHeader : [setCookieHeader];
  return list.map((raw) => {
    const parts = raw.split(';').map((part) => part.trim());
    const [nameValue] = parts;
    const name = nameValue.split('=')[0];
    const attributes = parts.slice(1).map((part) => part.toLowerCase());
    return {
      name,
      secure: attributes.includes('secure'),
      httpOnly: attributes.includes('httponly'),
      sameSite: attributes.find((a) => a.startsWith('samesite')) || null
    };
  });
}

function analyzeCookies(setCookieHeader) {
  const cookies = parseSetCookie(setCookieHeader);
  const findings = [];

  if (cookies.length === 0) {
    return { category: 'cookies', totalCookies: 0, secureCookies: 0, httpOnlyCookies: 0, sameSiteCookies: 0, score: 15, maxScore: 15, findings };
  }

  let score = 0;
  const perCookieMax = 15 / cookies.length;

  cookies.forEach((cookie) => {
    let cookieScore = 0;

    if (cookie.secure) {
      cookieScore += perCookieMax / 3;
    } else {
      findings.push({ check: 'cookie_secure', severity: 'high', message: `Cookie "${cookie.name}" is missing the Secure attribute.` });
    }

    if (cookie.httpOnly) {
      cookieScore += perCookieMax / 3;
    } else {
      findings.push({ check: 'cookie_httponly', severity: 'high', message: `Cookie "${cookie.name}" is missing HttpOnly, so it is readable by JavaScript.` });
    }

    const hasGoodSameSite = cookie.sameSite && (cookie.sameSite.includes('strict') || cookie.sameSite.includes('lax'));
    if (hasGoodSameSite) {
      cookieScore += perCookieMax / 3;
    } else {
      findings.push({ check: 'cookie_samesite', severity: 'medium', message: `Cookie "${cookie.name}" does not set SameSite=Strict or Lax.` });
    }

    score += cookieScore;
  });

  return {
    category: 'cookies',
    totalCookies: cookies.length,
    secureCookies: cookies.filter((c) => c.secure).length,
    httpOnlyCookies: cookies.filter((c) => c.httpOnly).length,
    sameSiteCookies: cookies.filter((c) => c.sameSite && (c.sameSite.includes('strict') || c.sameSite.includes('lax'))).length,
    score: Math.round(score),
    maxScore: 15,
    findings
  };
}

module.exports = { analyzeCookies, parseSetCookie };