const fs = require('fs');
const readJsonFile = require('../helpers/readJsonFile');

const file = 'talker.json';
const HTTP_CREATED_STATUS = 201;

function postTalker(req, res) {
  const { age, name, talk } = req.body;
  const talkers = readJsonFile(file);
  const index = talkers.length + 1;

  talkers.push({ id: index, name, age, talk });
  const talkersList = JSON.stringify(talkers);

  fs.writeFileSync(file, talkersList);

  return res.status(HTTP_CREATED_STATUS).json({ id: index, name, age, talk });
}

module.exports = postTalker;