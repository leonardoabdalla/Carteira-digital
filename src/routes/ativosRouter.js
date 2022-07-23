const { Router } = require('express');
const assetsController = require('../controllers/assetsController');
const ativosController = require('../controllers/ativosController');

const ativosRoute = Router();

ativosRoute.get('/cliente/:id', ativosController.getByClient);
ativosRoute.get('/assets/:id', assetsController.getCustomer);
ativosRoute.get('/', assetsController.listCustomer);

module.exports = ativosRoute;