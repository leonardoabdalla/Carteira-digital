const express = require('express');

const app = express();

app.use(3000, () => console.log('rodando na porta 3000'));