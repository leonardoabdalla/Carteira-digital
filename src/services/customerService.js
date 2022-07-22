const characterModel = require('../models/customerModel');

const characterService = {

  // async add(data) {
  //   const id = await characterModel.add(data);
  //   return id;
  // },

  async get(id) {
    const item = await characterModel.get(id);
    return item;
  },

  async list() {
    const items = await characterModel.list();
    return items;
  },

};

module.exports = characterService;