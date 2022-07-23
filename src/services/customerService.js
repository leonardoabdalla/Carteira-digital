const customersModel = require('../models/customerModel');
const NotFoundError = require('../erros/NotFoundError');

const customersService = {

  async checkIfExists(id) {
    const exists = await customersModel.exists(id);
    if (!exists) {
      throw new NotFoundError('"customer" not found');
    }
  },

  async get(id) {
    const item = await customersModel.get(id);
    return item;
  },

  async list() {
    const items = await customersModel.list();
    return items;
  },

};

module.exports = customersService;