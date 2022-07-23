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
    const subtracaoValor = contaCliente.saldo + valor;
    const deposito = await contaModel.addDeposito(codCliente, valor, subtracaoValor);
    return deposito;
  },

};

module.exports = contaService;