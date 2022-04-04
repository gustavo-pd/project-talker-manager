const fs = require('fs');
const readJsonFile = require('../helpers/readJsonFile');

const HTTP_OK_STATUS = 200;
const file = './talker.json';

function putTalker(req, res) {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const talkers = readJsonFile(file);
  const findId = talkers.findIndex((i) => i.id === parseInt(id, 10));
  talkers[findId] = { ...talkers[findId], name, age, talk };
  const talkersList = JSON.stringify(talkers, null, 2);
  fs.writeFileSync(file, talkersList);

  return res.status(HTTP_OK_STATUS).json(talkers[findId]);
}

module.exports = putTalker;
