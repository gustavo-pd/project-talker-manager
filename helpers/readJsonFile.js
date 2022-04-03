const fs = require('fs');

function readJsonFile(fileName) {
  const fsJson = fs.readFileSync(fileName, 'utf-8');
  const fsParseJson = JSON.parse(fsJson);
  return fsParseJson;
}

module.exports = readJsonFile;
