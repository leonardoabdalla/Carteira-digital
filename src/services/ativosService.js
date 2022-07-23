const ativosModel = require('../models/ativosModel');
// const NotFoundError = require('../erros/NotFoundError');

const ativosService = {

  async get(id) {
    const item = await ativosModel.arrayAtivos(id);
    return item;
  },

};

module.exports = ativosService;