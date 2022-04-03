const readJsonFile = require('../helpers/readJsonFile');

const file = 'talker.json';
const HTTP_OK_STATUS = 200;

function getTalkers(_req, res) {
  if (!(readJsonFile(file))) {
    return res.status(HTTP_OK_STATUS).json([]);
  }
  return res.status(HTTP_OK_STATUS).json(readJsonFile(file));
}

module.exports = getTalkers;
