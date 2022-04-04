const readJsonFile = require('../helpers/readJsonFile');

const HTTP_OK_STATUS = 200;
const file = 'talker.json';

function searchTalker(req, res) {
  const { search } = req.query;

  const talkers = readJsonFile(file);
  const filterTalkers = talkers.filter((r) => r.name.includes(search));

  if (!search) {
    return res.status(HTTP_OK_STATUS).json(talkers);
  }
  if (search.length === 0) {
  return res.status(HTTP_OK_STATUS).json([]);
  }

  return res.status(HTTP_OK_STATUS).json(filterTalkers);
}

module.exports = searchTalker;