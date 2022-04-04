const fs = require('fs');
const readJsonFile = require('../helpers/readJsonFile');

const HTTP_NO_CONTENT = 204;
const file = 'talker.json';

function deleteTalker(req, res) {
  let { id } = req.params;

  const talkers = readJsonFile(file);
  const talkerIndex = talkers.findIndex((r) => r.id === Number(id));

  if (talkerIndex === -1) return res.status(404).json({ message: 'Palestrante não encontrado!' });
  
  talkers.splice(talkerIndex, 1);

  fs.writeFileSync(file, JSON.stringify(talkers));
  id = Number(id);

  return res.status(HTTP_NO_CONTENT).end();
}

module.exports = deleteTalker;