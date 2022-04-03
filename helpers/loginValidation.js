function emailValidation(email) {
  const regex = /\S+@\S+\.\S+/; // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  if (!email || email === '') {
    return 'O campo "email" é obrigatório';
  }
  if (!(regex.test(email))) {
    return 'O "email" deve ter o formato "email@email.com"';
  }
}

function passwordValidation(password) {
  if (!password || password === '') {
    return 'O campo "password" é obrigatório';
  }
  if (password.length < 6) {
    return 'O "password" deve ter pelo menos 6 caracteres';
  }
}

function loginValidation(email, password) {
  if (emailValidation(email) !== undefined) {
    return console.log(emailValidation(email));
  }
  return console.log(passwordValidation(password));
}

module.exports = loginValidation;