// const { ChatAnthropic } = require('@langchain/anthropic');
const { z } = require('zod');

const SEVERITY_ORDER = { critical: 0, high: 1, medium: 2, low: 3 };

const RULE_BASED_ENRICHMENT = {
  hsts: { title: 'Enable HSTS', why: 'Protects users from SSL-stripping attacks that force a downgrade to plain HTTP.', how: 'Add Strict-Transport-Security with max-age=31536000; includeSubDomains.', reference: 'OWASP ASVS 9.1' },
  csp: { title: 'Add a Content-Security-Policy', why: 'Restricts which sources scripts and resources can load from, the strongest mitigation against XSS.', how: "Start with a strict default-src 'self' policy and loosen only where needed.", reference: 'OWASP ASVS 14.4.3' },
  frame_options: { title: 'Set X-Frame-Options', why: 'Prevents the page from being embedded in a hidden iframe, the basis of clickjacking.', how: 'Add X-Frame-Options: DENY or SAMEORIGIN.', reference: 'OWASP ASVS 14.4.7' },
  nosniff: { title: 'Set X-Content-Type-Options', why: 'Stops the browser from guessing content types, which can turn an upload into executable script.', how: 'Add X-Content-Type-Options: nosniff.', reference: 'OWASP ASVS 14.4.6' },
  permissions_policy: { title: 'Add a Permissions-Policy', why: 'Restricts which browser features a page can access, such as camera, geolocation, or microphone.', how: 'Add Permissions-Policy with only the features you actually use.', reference: 'W3C Permissions Policy spec' },
  referrer_policy: { title: 'Add a Referrer-Policy', why: 'Controls how much of your URL leaks to third parties on outbound navigation.', how: 'Add Referrer-Policy: strict-origin-when-cross-origin.', reference: 'OWASP ASVS 14.4.8' },
  cookie_secure: { title: 'Mark cookies Secure', why: 'Without it a cookie can be sent over plain HTTP and intercepted.', how: 'Add the Secure attribute to every session or auth cookie.', reference: 'OWASP ASVS 3.4.1' },
  cookie_httponly: { title: 'Mark cookies HttpOnly', why: 'Without it JavaScript can read the cookie, turning a single XSS bug into session theft.', how: 'Add the HttpOnly attribute to every session or auth cookie.', reference: 'OWASP ASVS 3.4.2' },
  cookie_samesite: { title: 'Set SameSite on cookies', why: 'Without it the cookie is sent on cross-site requests, enabling CSRF.', how: 'Add SameSite=Strict or SameSite=Lax.', reference: 'OWASP ASVS 3.4.3' },
  tls_version: { title: 'Disable deprecated TLS versions', why: 'TLS 1.0 and 1.1 have known cryptographic weaknesses and are rejected by modern browsers.', how: 'Configure the server to require TLS 1.2 or higher.', reference: 'OWASP ASVS 9.1.2' },
  cipher_suite: { title: 'Restrict to strong cipher suites', why: 'Weak ciphers like RC4 or 3DES can be broken with realistic effort.', how: 'Allow only modern AEAD suites such as AES-GCM or ChaCha20-Poly1305.', reference: 'OWASP ASVS 9.1.3' },
  forward_secrecy: { title: 'Enable forward secrecy', why: 'Without it, a leaked server key lets an attacker decrypt previously captured traffic.', how: 'Prefer ECDHE key exchange cipher suites on TLS 1.2.', reference: 'OWASP ASVS 9.1.3' },
  trusted_ca: { title: 'Use a publicly trusted certificate', why: "A self-signed or untrusted certificate is rejected by browsers and trains users to click through warnings.", how: "Issue the certificate from a trusted CA such as Let's Encrypt or DigiCert.", reference: 'OWASP ASVS 9.2' },
  cert_expiry: { title: 'Renew the certificate', why: 'An expired certificate makes the site inaccessible in every modern browser.', how: 'Renew before expiry and automate future renewals.', reference: 'OWASP ASVS 9.2.4' },
  hostname_match: { title: 'Fix the certificate hostname mismatch', why: "A certificate that doesn't cover the hostname triggers browser warnings.", how: 'Reissue the certificate with the correct hostname in the SAN list.', reference: 'OWASP ASVS 9.2.1' },
  https_enforcement: { title: 'Redirect HTTP to HTTPS', why: 'Without a redirect, the first request a user makes can be intercepted before encryption starts.', how: 'Add a permanent redirect from port 80 to the HTTPS equivalent.', reference: 'OWASP ASVS 9.1.1' },
  redirect_length: { title: 'Shorten the redirect chain', why: 'Long redirect chains slow page loads and increase the attack surface.', how: 'Collapse intermediate redirects to a single hop.', reference: null },
  cross_domain_redirect: { title: 'Verify cross-domain redirects', why: 'Unexpected redirects across domains can indicate a misconfiguration or a phishing setup.', how: 'Confirm every domain in the chain is one you control or intend.', reference: null }
};

function enrichWithRules(finding) {
  const enrichment = RULE_BASED_ENRICHMENT[finding.check] || {};
  return {
    check: finding.check,
    title: enrichment.title || finding.check,
    severity: finding.severity,
    category: finding.category,
    why: enrichment.why || finding.message,
    how: enrichment.how || finding.message,
    reference: enrichment.reference || null
  };
}

const recommendationSchema = z.object({
  recommendations: z.array(
    z.object({
      check: z.string(),
      title: z.string(),
      severity: z.enum(['critical', 'high', 'medium', 'low']),
      category: z.string(),
      why: z.string(),
      how: z.string(),
      reference: z.string().nullable()
    })
  )
});

async function enrichWithLLM(findings) {
  const model = new ChatAnthropic({
    model: 'claude-sonnet-4-6',
    apiKey: process.env.ANTHROPIC_API_KEY,
    temperature: 0
  }).withStructuredOutput(recommendationSchema);

  const prompt = [
    'You are a security engineer writing remediation guidance for a scan report.',
    'For each finding below, write a short title, a "why" describing the impact in plain language,',
    'and a "how" describing the concrete fix. Keep why and how each under 30 words.',
    'Preserve the check, severity, and category fields exactly as given. If you know a relevant standard',
    '(OWASP ASVS, CWE, NIST), include it in reference, otherwise use null.',
    '',
    `Findings: ${JSON.stringify(findings)}`
  ].join('\n');

  const result = await model.invoke(prompt);
  return result.recommendations;
}

async function generateRecommendations(analyses) {
  const categories = Object.values(analyses).filter((c) => c && c.category !== undefined);
  const allFindings = categories.flatMap((c) =>
    (c.findings || []).map((f) => ({ ...f, category: c.category }))
  );

  const sorted = allFindings.sort((a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]);

  if (sorted.length === 0) {
    return [];
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return sorted.map(enrichWithRules);
  }

  try {
    return await enrichWithLLM(sorted);
  } catch (err) {
    console.error('LLM recommendation generation failed, falling back to rule-based:', err.message);
    return sorted.map(enrichWithRules);
  }
}

module.exports = { generateRecommendations };