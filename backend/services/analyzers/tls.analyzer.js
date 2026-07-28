const WEAK_PROTOCOLS = ['TLSv1', 'TLSv1.1', 'SSLv3', 'SSLv2'];
const WEAK_CIPHER_PATTERNS = ['RC4', '3DES', 'DES', 'NULL', 'EXPORT'];
const PFS_KEY_EXCHANGE = ['ECDHE', 'DHE'];

function analyzeTLS(tlsData) {
  const findings = [];
  let score = 0;

  const protocol = tlsData.protocol || 'UNKNOWN';
  const isWeakProtocol = WEAK_PROTOCOLS.includes(protocol);

  if (!isWeakProtocol && (protocol === 'TLSv1.2' || protocol === 'TLSv1.3')) {
    score += protocol === 'TLSv1.3' ? 17 : 12;
  } else {
    findings.push({
      check: 'tls_version',
      severity: 'critical',
      message: `Server negotiated ${protocol}, which is deprecated. Disable it and require TLS 1.2 or higher.`
    });
  }

  const cipherName = tlsData.cipher ? tlsData.cipher.name : '';
  const isWeakCipher = WEAK_CIPHER_PATTERNS.some((pattern) => cipherName.includes(pattern));

  if (cipherName && !isWeakCipher) {
    score += 10;
  } else {
    findings.push({
      check: 'cipher_suite',
      severity: 'high',
      message: `Cipher suite ${cipherName || 'unknown'} is weak or unidentified. Restrict to modern AEAD ciphers.`
    });
  }

  const hasPFS = protocol === 'TLSv1.3'
    ? true
    : PFS_KEY_EXCHANGE.some((kex) => cipherName.includes(kex));

  if (hasPFS) {
    score += 3;
  } else {
    findings.push({
      check: 'forward_secrecy',
      severity: 'medium',
      message: 'Key exchange does not provide perfect forward secrecy. Prefer ECDHE cipher suites.'
    });
  }

  return { category: 'tls', protocol, cipher: cipherName, score, maxScore: 30, findings };
}

module.exports = { analyzeTLS };