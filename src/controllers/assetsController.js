const assetsService = require('../services/assetsService');

const assetsController = {

  async getCustomer(req, res) {
    const { id } = req.params;
    await assetsService.checkIfExists(id);
    const item = await assetsService.get(id);
    res.json(item);
  },

  async listCustomer(req, res) {
    const items = await assetsService.list();
    res.json(items);
  },

};

module.exports = assetsController;