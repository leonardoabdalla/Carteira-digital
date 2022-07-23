const { Router } = require('express');
const investimentosController = require('../controllers/investimentosController');

const investimentosRoute = Router();

investimentosRoute.post('/comprar', investimentosController.addTransacaoCompra);
investimentosRoute.post('/vender', investimentosController.addTransacaoVenda);

module.exports = investimentosRoute;