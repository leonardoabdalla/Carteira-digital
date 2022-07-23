const contaService = require('../services/contaService');
const clienteService = require('../services/customerService');

const contaController = {

  async addSaque(req, res) {
    const { codCliente, valor } = req.body;
    const contaCliente = await clienteService.get(codCliente);
    const verificaSaldo = await contaService.verificaSaldo(contaCliente, valor);
    console.log(verificaSaldo);
    const saque = await contaService.addSaque(codCliente, valor, contaCliente);
    console.log(saque);
    res.status(201).json({ message: `Saque: ${valor}` });
  },

  async addDeposito(req, res) {
    const { codCliente, valor } = req.body;
    const contaCliente = await clienteService.get(codCliente);
    const deposito = await contaService.addDeposito(codCliente, valor, contaCliente);
    console.log(deposito);
    res.status(201).json({ message: `Deposito: ${valor}` });
  },

};

module.exports = contaController;