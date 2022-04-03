function emailValidation(email) {
  const regex = /\S+@\S+\.\S+/; // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  if (!email || email === '') {
    return console.log('O campo "email" é obrigatório');
  }
  if (!(regex.test(email))) {
    return console.log('O "email" deve ter o formato "email@email.com"');
  }
}

module.exports = emailValidation;