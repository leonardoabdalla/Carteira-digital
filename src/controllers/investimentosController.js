const investimentosService = require('../services/investimentosService');
const customersService = require('../services/customerService');
const assetsService = require('../services/assetsService');

const investimentosController = {

  async addTransacaoCompra(req, res) {
    const { codCliente, codAtivo, qtdAtivo } = req.body;
    const dataCliente = await customersService.checkIfExists(codCliente);
    const dataAtivo = await assetsService.checkIfExists(codAtivo);
    const getAtivo = await assetsService.get(codAtivo);
    const getCliente = await customersService.get(codCliente);
    const saldoCliente = await investimentosService
      .chekSaldo(codCliente, codAtivo, getAtivo, getCliente, qtdAtivo);
    console.log(dataCliente, dataAtivo);
    const id = await investimentosService
      .add(codCliente, codAtivo, qtdAtivo, getAtivo, saldoCliente);
    const item = await investimentosService.get(id);
    res.status(201).json(item);
  },

  async addTransacaoVenda(req, res) {
    const { codCliente, codAtivo, qtdAtivo } = req.body;
    const dataCliente = await customersService.checkIfExists(codCliente);
    const dataAtivo = await assetsService.checkIfExists(codAtivo);
    const getAtivo = await assetsService.get(codAtivo);
    const getCliente = await customersService.get(codCliente);
    console.log(dataCliente, dataAtivo);
    const id = await investimentosService
      .addVenda(codCliente, codAtivo, qtdAtivo, getAtivo, getCliente);
    const item = await investimentosService.get(id);
    res.status(201).json(item);
  },
};

module.exports = investimentosController;