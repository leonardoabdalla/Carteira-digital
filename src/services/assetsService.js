const assetsModel = require('../models/asstsModel');
const NotFoundError = require('../erros/NotFoundError');

const assetsService = {

  async checkIfExists(id) {
    const exists = await assetsModel.exists(id);
    if (!exists) {
      throw new NotFoundError('"assets" not found');
    }
    return exists;
  },

  async get(id) {
    const item = await assetsModel.get(id);
    return item;
  },

  async list() {
    const items = await assetsModel.list();
    return items;
  },

};

module.exports = assetsService;