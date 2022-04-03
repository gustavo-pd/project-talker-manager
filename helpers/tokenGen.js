const crypto = require('crypto');

function tokenGen(length) {
  const token = crypto.randomBytes(length).toString('hex');
  return token;
}

module.exports = tokenGen;