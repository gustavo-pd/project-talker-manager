const HTTP_UNAUTHORIZED_REQUEST = 401;

function validateToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED_REQUEST).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16) {
    return res.status(HTTP_UNAUTHORIZED_REQUEST).json({ message: 'Token inválido' });
  }

  next();
}

module.exports = validateToken;