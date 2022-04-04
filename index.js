const express = require('express');
const bodyParser = require('body-parser');

const getTalkers = require('./middlewares/getTalkers');
const getTalkerById = require('./middlewares/getTalkerById');
const postLogin = require('./middlewares/postLogin');

const validateToken = require('./middlewares/validateToken');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const validateDate = require('./middlewares/validateDate');
const validateRate = require('./middlewares/validateRate');
const validateTalk = require('./middlewares/validateTalk');
const postTalker = require('./middlewares/postTalker');
const putTalker = require('./middlewares/putTalker');
const deleteTalker = require('./middlewares/deleteTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getTalkers);

app.get('/talker/:id', getTalkerById);

app.post('/login', postLogin);

app.post(
  '/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate,
  postTalker,
);

app.put(
  '/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate,
  putTalker,
);

app.delete(
  '/talker/:id',
  validateToken,
  deleteTalker,
);

app.listen(PORT, () => {
  console.log('Online');
});
