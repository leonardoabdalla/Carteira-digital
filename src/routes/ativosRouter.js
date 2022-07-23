const { Router } = require('express');
const ativosController = require('../controllers/ativosController');

const ativosRoute = Router();

ativosRoute.get('/:id', ativosController.getByClient);

module.exports = ativosRoute;