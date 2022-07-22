const { Router } = require('express');
const customersController = require('../controllers/customerController');

const customersRoute = Router();

customersRoute.get('/', customersController.listCharacters);
customersRoute.get('/:id', customersController.getCharacter);
customersRoute.post('/', customersController.addCharacter);

module.exports = customersRoute;