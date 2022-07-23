const customerService = require('../services/customerService');

const customerController = {

  async getCustomer(req, res) {
    const { id } = req.params;
    await customerService.checkIfExists(id);
    const item = await customerService.get(id);
    res.json(item);
  },

  async listCustomer(req, res) {
    const items = await customerService.list();
    res.json(items);
  },
};

module.exports = customerController;