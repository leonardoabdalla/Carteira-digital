const contaModel = require('../models/contaModel');
const NotFoundError = require('../erros/NotFoundError');

const contaService = {

  async verificaSaldo(contaCliente, valor) {
    const valorSaque = contaCliente.saldo - valor;
    if (valorSaque < 0) {
      throw new NotFoundError('Saldo insuficiente');
    }
  },

  async addSaque(codCliente, valor, contaCliente) {
    const subtracaoValor = contaCliente.saldo - valor;
    const saque = await contaModel.addSaque(codCliente, valor, subtracaoValor);
    return saque;
  },

  async addDeposito(codCliente, valor, contaCliente) {
    if (valor <= 0) {
      throw new NotFoundError('Saldo não pode ser igual ou menor que zero');
    }
    const subtracaoValor = parseFloat(contaCliente.saldo) + valor;
    const deposito = await contaModel.addDeposito(codCliente, subtracaoValor, valor);
    return deposito;
  },

};

module.exports = contaService;