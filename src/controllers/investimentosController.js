const investimentosService = require('../services/investimentosService');
const customersService = require('../services/customerService');
const assetsService = require('../services/assetsService');

const investimentosController = {

  async addCharacter(req, res) {
    const { codCliente, codAtivo, qtdAtivo } = req.body;
    const dataCliente = await customersService.checkIfExists(codCliente);
    const dataAtivo = await assetsService.checkIfExists(codAtivo);
    const getAtivo = await assetsService.get(codAtivo);
    // console.log('getAtivo =====> ', getAtivo);
    console.log(dataCliente, dataAtivo);
    const id = await investimentosService.add(codCliente, codAtivo, qtdAtivo, getAtivo);
    const item = await investimentosService.get(id);
    res.status(201).json(item);
  },
};

// const data = await characterService.validateBodyAdd(req.body);
// const id = await characterService.add(data);
// const item = await characterService.get(id);

module.exports = investimentosController;