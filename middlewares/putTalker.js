const fs = require('fs');
const readJsonFile = require('../helpers/readJsonFile');

const HTTP_OK_STATUS = 200;
const file = 'talker.json';

function putTalker(req, res) {
  const { name, age, talk } = req.body;
  let { id } = req.params;

  const talkers = readJsonFile(file);
  const findId = talkers.findIndex((i) => i.id === Number(id));
  talkers[findId] = { ...talkers[findId], name, age, talk };

  fs.writeFileSync(file, JSON.stringify(talkers));
  id = Number(id);

  return res.status(HTTP_OK_STATUS).json({ id, name, age, talk });
}

module.exports = putTalker;