const express = require('express');
require('express-async-errors');
const customersRoute = require('./routes/customersRouter');
const assetsRoute = require('./routes/assetsRouter');

const APP_PORT = Number(process.env.APP_PORT || 3000);

const app = express();
app.use(express.json());

app.use('/customers', customersRoute);
app.use('/assets', assetsRoute);

app.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError': res.status(400).json({ message }); break;
    case 'NotFoundError': res.status(404).json({ message }); break;
    default: console.warn(err); res.sendStatus(500);
  }
});

app.listen(APP_PORT, () => console.log(`running on port ${APP_PORT}`));