const { Router } = require('express');
const contaController = require('../controllers/contaController');
const customersController = require('../controllers/customerController');

const contaRouter = Router();

contaRouter.post('/deposito', contaController.addDeposito);
contaRouter.post('/saque', contaController.addSaque);
contaRouter.get('/:id', customersController.getCustomer);

module.exports = contaRouter;