const customerService = require('../services/customerService');

const customerController = {

  async getCustomer(req, res) {
    const { id } = await customerService.validateParamsId(req.params);
    await customerService.checkIfExists(id);
    const item = await customerService.get(id);
    res.json(item);
  },

  async listCharacters(req, res) {
    const items = await customerService.list();
    res.json(items);
  },

  async addCharacter(req, res) {
    const data = await customerService.validateBodyAdd(req.body);
    const id = await customerService.add(data);
    const item = await customerService.get(id);
    res.status(201).json(item);
  },
};

module.exports = customerController;