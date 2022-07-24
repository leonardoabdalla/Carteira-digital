const ativosService = require('../services/ativosService');
const assetsService = require('../services/assetsService');

const ativosController = {

  async getByClient(req, res) {
    const { id } = req.params;
    await assetsService.checkIfExists(id);
    const item = await ativosService.get(id);
    console.log('controller ==> ', item);
    res.json(item);
  },

};

module.exports = ativosController;