const fs = require('fs');
const readJsonFile = require('../helpers/readJsonFile');

function postTalker(req, res) {
  const { age, name, talk } = req.body;
  const talkers = readJsonFile('talker.json');
  const index = talkers.length + 1;

  talkers.push({ id: index, name, age, talk });
  const talkersList = JSON.stringify(talkers);

  fs.writeFileSync('talker.json', talkersList);

  return res.status(201).json({ id: index, name, age, talk });
}

module.exports = postTalker;