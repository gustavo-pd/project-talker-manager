const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

const fs = require('fs').promises;

app.get('/talker', async (_req, res) => {
  const fsJson = await fs.readFile('./talker.json', 'utf8');
  const fsParseJson = JSON.parse(fsJson);
  return res.status(HTTP_OK_STATUS).send(fsParseJson);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const fsJson = await fs.readFile('./talker.json', 'utf8');
  const fsParseJson = JSON.parse(fsJson);
  const findId = fsParseJson.find((r) => r.id === parseInt(id, 10));
  if (!findId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).json(findId);
});
