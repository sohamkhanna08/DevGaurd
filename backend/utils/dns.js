const dns = require('dns');

function isPrivateIPv4(ip) {
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4 || parts.some((p) => Number.isNaN(p))) return false;
  const [a, b] = parts;

  if (a === 10) return true;
  if (a === 127) return true;
  if (a === 0) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;

  return false;
}

function isPrivateIPv6(ip) {
  const lower = ip.toLowerCase();
  if (lower === '::1' || lower === '::') return true;
  if (lower.startsWith('fc') || lower.startsWith('fd')) return true;
  if (lower.startsWith('fe80')) return true;
  if (lower.startsWith('::ffff:')) {
    return isPrivateIPv4(lower.replace('::ffff:', ''));
  }
  return false;
}

function isPrivateIP(ip) {
  return ip.includes(':') ? isPrivateIPv6(ip) : isPrivateIPv4(ip);
}

function resolveAndValidate(hostname) {
  return new Promise((resolve, reject) => {
    dns.lookup(hostname, { all: false }, (err, address, family) => {
      if (err) {
        return reject(new Error(`Could not resolve ${hostname}: ${err.message}`));
      }
      if (isPrivateIP(address)) {
        return reject(new Error(`Resolved address ${address} for ${hostname} is a private, loopback, or link-local IP. Blocked to prevent SSRF.`));
      }
      resolve({ address, family });
    });
  });
}

module.exports = { resolveAndValidate, isPrivateIP };