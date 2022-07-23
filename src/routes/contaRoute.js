const { Router } = require('express');
const contaController = require('../controllers/contaController');

const contaRouter = Router();

contaRouter.post('/deposito', contaController.addDeposito);
contaRouter.post('/saque', contaController.addSaque);

module.exports = contaRouter;