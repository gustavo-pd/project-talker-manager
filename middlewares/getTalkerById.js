const readJsonFile = require('../helpers/readJsonFile');

const file = 'talker.json';
const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND = 404;

function getTalkerById(req, res) {
  const { id } = req.params;
  const findId = readJsonFile(file).find((i) => i.id === parseInt(id, 10));
  if (!findId) {
    return res.status(HTTP_NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(HTTP_OK_STATUS).json(findId);
}

module.exports = getTalkerById;