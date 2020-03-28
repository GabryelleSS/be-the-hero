const crypto = require('crypto');

module.exports = generateUniqueId = () => (
  crypto.randomBytes(4).toString('HEX')
);