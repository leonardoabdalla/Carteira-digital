const { Router } = require('express');
const customersController = require('../controllers/customerController');

const customersRoute = Router();

customersRoute.get('/', customersController.listCustomer);

module.exports = customersRoute;