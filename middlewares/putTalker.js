const fs = require('fs');
const readJsonFile = require('../helpers/readJsonFile');

const file = 'talker.json';
const HTTP_OK_STATUS = 200;

function putTalker(req, res) {
  let { id } = req.params;
  const { name, age, talk } = req.body;
  const talkers = readJsonFile(file);

  const findId = talkers.find((i) => i.id === Number(id));
  talkers[findId] = { ...talkers[findId], name, age, talk };

  const talkersList = JSON.stringify(talkers);

  fs.writeFileSync(file, talkersList); // id = number(id)
  id = Number(id);

  return res.status(HTTP_OK_STATUS).json({ id, name, age, talk });
}

module.exports = putTalker;