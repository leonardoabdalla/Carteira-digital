const investimentosModel = require('../models/investimentosModel');
const NotFoundError = require('../erros/NotFoundError');

const investimentosService = {
  async add(codCliente, codAtivo, qtdAtivo, getAtivo, saldoCliente) {
    if (getAtivo.qtdAtivoDisponivel < qtdAtivo) {
      throw new NotFoundError('Quantidade de ativos disponível insuficiente');
    }
    const valorTotal = getAtivo.valorAtivo * qtdAtivo;
    const ativosDisponiveis = getAtivo.qtdAtivoDisponivel - qtdAtivo;
    const id = await investimentosModel.add(codCliente, codAtivo, qtdAtivo,
      valorTotal, ativosDisponiveis, saldoCliente);
    return id;
  },

  async chekSaldo(codCliente, codAtivo, getAtivo, getCliente, qtdAtivo) {
    const valorTotAtivo = getAtivo.valorAtivo * qtdAtivo;
    const valorSuficiente = getCliente.saldo - valorTotAtivo;
    if (valorSuficiente < 0) {
      throw new NotFoundError('Saldo insuficiênte para compra');

    }
    return valorSuficiente;
  },

  async addVenda(codCliente, codAtivo, qtdAtivo, getAtivo, getCliente) {
    const filtroInvestimento = await investimentosModel.filtroInvestimento(codCliente, codAtivo);
    const atualAtivos = filtroInvestimento.resultCompra - filtroInvestimento.resultVenda;
    console.log('SERVICE   =====> ', atualAtivos);
    if (atualAtivos < 0 || filtroInvestimento.resultCompra === null) {
      throw new NotFoundError('Quantidade de ativos insuficiênte');
    }
    const valorTotal = getAtivo.valorAtivo * qtdAtivo;
    const devolvendoAtivos = getAtivo.qtdAtivoDisponivel + qtdAtivo;
    const saldoCliente = getCliente.saldo + valorTotal;
    const id = await investimentosModel.addVenda(codCliente, codAtivo,
      qtdAtivo, valorTotal, devolvendoAtivos, saldoCliente);
    return id;
  },

  async get(id) {
    const item = await investimentosModel.getTransacao(id);
    return item;
  },
};

module.exports = investimentosService;