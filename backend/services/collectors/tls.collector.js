const tls = require('tls');
const { URL } = require('url');
const { validateSSRF } = require('../validators/ssrf.validator');

async function collectTLSData(finalUrl, timeoutMs = 8000) {
  const hostname = new URL(finalUrl).hostname;
  const { address } = await validateSSRF(finalUrl);

  return new Promise((resolve, reject) => {
    const socket = tls.connect(
      {
        host: address,
        port: 443,
        servername: hostname,
        rejectUnauthorized: false,
        timeout: timeoutMs
      },
      () => {
        const protocol = socket.getProtocol();
        const cipher = socket.getCipher();
        const cert = socket.getPeerCertificate(true);
        const authorized = socket.authorized;
        const authorizationError = socket.authorizationError;
        const alpnProtocol = socket.alpnProtocol;

        socket.end();

        resolve({
          protocol,
          cipher,
          cert,
          authorized,
          authorizationError,
          alpnProtocol,
          hostname
        });
      }
    );

    socket.on('timeout', () => {
      socket.destroy();
      reject(new Error(`TLS connection to ${hostname} timed out`));
    });

    socket.on('error', reject);
  });
}

module.exports = { collectTLSData };