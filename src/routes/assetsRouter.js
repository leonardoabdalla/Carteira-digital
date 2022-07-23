const { Router } = require('express');
const assetsController = require('../controllers/assetsController');

const assetsRoute = Router();

assetsRoute.get('/', assetsController.listCustomer);
assetsRoute.get('/:id', assetsController.getCustomer);

module.exports = assetsRoute;