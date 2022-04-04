const HTTP_BAD_REQUEST = 400;

function validateAge(req, res, next) {
  const { age } = req.body;

  if (!age || age === '') {
    return res.status(HTTP_BAD_REQUEST).json({ message: 'O campo "age" é obrigatório' });
  }
  
  if (parseInt(age, 10) < 18) {
    return res.status(HTTP_BAD_REQUEST).json({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }

  next();
}

module.exports = validateAge;