const HTTP_BAD_REQUEST = 400;

function validateDate(req, res, next) {
  const { watchedAt } = req.body.talk;
  const regex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/; // https://www.guj.com.br/t/resolvido-como-validar-data-com-java-script

  if (!regex.test(watchedAt)) {
    return res.status(HTTP_BAD_REQUEST).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  next();
}

module.exports = validateDate;