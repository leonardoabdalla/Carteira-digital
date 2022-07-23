const investimentosModel = require('../models/investimentosModel');
const NotFoundError = require('../erros/NotFoundError');

const investimentosService = {
  async add(codCliente, codAtivo, qtdAtivo, getAtivo) {
    if (getAtivo.qtdAtivoDisponivel < qtdAtivo) {
      throw new NotFoundError('Quantidade de ativos disponível insuficiente');
    }
    const valorTotal = getAtivo.valorAtivo * qtdAtivo;
    const ativosDisponiveis = getAtivo.qtdAtivoDisponivel - qtdAtivo;
    const id = await investimentosModel.add(codCliente, codAtivo, qtdAtivo,
      valorTotal, ativosDisponiveis);
    return id;
  },

  async addVenda(codCliente, codAtivo, qtdAtivo, getAtivo) {
    const filtroInvestimento = await investimentosModel.filtroInvestimento(codCliente, codAtivo);
    const atualAtivos = filtroInvestimento.resultCompra - filtroInvestimento.resultVenda;
    console.log('SERVICE   =====> ', atualAtivos);
    if (atualAtivos < 0 || filtroInvestimento.resultCompra === null) {
      throw new NotFoundError('Quantidade de ativos insuficiênte');
    }
    const valorTotal = getAtivo.valorAtivo * qtdAtivo;
    const devolvendoAtivos = getAtivo.qtdAtivoDisponivel + qtdAtivo;
    const id = await investimentosModel.addVenda(codCliente, codAtivo,
      qtdAtivo, valorTotal, devolvendoAtivos);
    return id;
  },

  async get(id) {
    const item = await investimentosModel.getTransacao(id);
    return item;
  },
};

module.exports = investimentosService;