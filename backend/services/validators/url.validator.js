const { URL } = require('url');

function normalizeUrl(rawUrl) {
  let url = rawUrl.trim();
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  return url;
}

function validateUrl(url) {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      throw new Error('Only http and https URLs are supported.');
    }
    return parsed;
  } catch {
    throw new Error('Invalid website URL.');
  }
}

module.exports = { normalizeUrl, validateUrl };