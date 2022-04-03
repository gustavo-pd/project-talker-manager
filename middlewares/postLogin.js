const loginValidation = require('../helpers/loginValidation');
const tokenGen = require('../helpers/tokenGen');

const HTTP_BAD_REQUEST = 400;
const HTTP_OK_STATUS = 200;

function postLogin(req, res) {
  const { email, password } = req.body;
  const loginReturn = loginValidation(email, password);
  const token = tokenGen(8);

  if (loginReturn !== undefined) {
    return res.status(HTTP_BAD_REQUEST).json({ message: loginReturn });
  }
  return res.status(HTTP_OK_STATUS).json({ token });
}

module.exports = postLogin;