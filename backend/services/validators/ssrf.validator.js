const { URL } = require('url');
const { resolveAndValidate } = require('../../utils/dns');

const BLOCKED_HOSTNAMES = ['localhost', '0.0.0.0', 'metadata.google.internal'];

//SSRF = Server Side Request Forgery
async function validateSSRF(url) {
  const parsed = new URL(url);
  const hostname = parsed.hostname.toLowerCase();

  if (BLOCKED_HOSTNAMES.includes(hostname)) {
    throw new Error(`Hostname ${hostname} is blocked.`);
  }

  const { address, family } = await resolveAndValidate(hostname);
  return { address, family, hostname };
}

module.exports = { validateSSRF };