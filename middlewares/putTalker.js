const fs = require('fs');
const readJsonFile = require('../helpers/readJsonFile');

const HTTP_OK_STATUS = 200;

function putTalker(req, res) {
  const { name, age, talk } = req.body;
  let { id } = req.params;

  const talkers = readJsonFile('talker.json');
  const findId = talkers.findIndex((i) => i.id === Number(id));
  talkers[findId] = { ...talkers[findId], name, age, talk };

  fs.writeFileSync('talker.json', JSON.stringify(talkers));
  id = Number(id);

  return res.status(HTTP_OK_STATUS).json({ name, age, id, talk });
}

module.exports = putTalker;