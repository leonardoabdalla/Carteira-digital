const { Router } = require('express');
const investimentosController = require('../controllers/investimentosController');

const investimentosRoute = Router();

investimentosRoute.post('/comprar', investimentosController.addCharacter);
module.exports = investimentosRoute;