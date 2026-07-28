const https = require('https');
const http = require('http');
const { URL } = require('url');
const { validateSSRF } = require('../validators/ssrf.validator');

function pinnedLookup(pinnedAddress, pinnedFamily) {
  return (hostname, options, callback) => {
    if (options && options.all) {
      return callback(null, [{ address: pinnedAddress, family: pinnedFamily }]);
    }
    return callback(null, pinnedAddress, pinnedFamily);
  };
}

function requestOnce(currentUrl, pinnedAddress, pinnedFamily, timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(currentUrl);
    const client = parsed.protocol === 'https:' ? https : http;

    const req = client.request(
      parsed,
      {
        method: 'GET',
        timeout: timeoutMs,
        rejectUnauthorized: false,
        lookup: pinnedLookup(pinnedAddress, pinnedFamily)
      },
      (res) => {
        res.resume();
        res.on('end', () => {
          resolve({
            url: currentUrl,
            statusCode: res.statusCode,
            headers: res.headers,
            location: res.headers.location || null
          });
        });
      }
    );

    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Request to ${currentUrl} timed out`));
    });

    req.on('error', reject);
    req.end();
  });
}

async function collectRedirectData(startUrl, maxHops = 10) {
  const chain = [];
  let currentUrl = startUrl;
  let hops = 0;

  while (hops < maxHops) {
    const { address, family } = await validateSSRF(currentUrl);
    const hop = await requestOnce(currentUrl, address, family);
    chain.push(hop);

    if (hop.statusCode >= 300 && hop.statusCode < 400 && hop.location) {
      currentUrl = new URL(hop.location, currentUrl).toString();
      hops += 1;
      continue;
    }
    break;
  }

  const finalHop = chain[chain.length - 1];

  return {
    chain,
    finalUrl: finalHop.url,
    headers: finalHop.headers,
    cookies: finalHop.headers['set-cookie'] || null,
    statusCode: finalHop.statusCode,
    redirectCount: chain.length - 1
  };
}

module.exports = { collectRedirectData };