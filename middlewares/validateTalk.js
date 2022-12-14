const HTTP_BAD_REQUEST = 400;

function validateTalk(req, res, next) {
  const { talk } = req.body;

  if (!talk || !talk.watchedAt || talk.rate === undefined) {
    return res.status(HTTP_BAD_REQUEST).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  next();
}

module.exports = validateTalk;