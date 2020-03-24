const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    evente: 'Semana Omnistack 11.0 ===',
    aluno: 'Dimitri Zuave'
  });
});

app.listen(3333)