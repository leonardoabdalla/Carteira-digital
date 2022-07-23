const investimentosModel = require('../models/investimentosModel');
const NotFoundError = require('../erros/NotFoundError');

const investimentosService = {
  async add(codCliente, codAtivo, qtdAtivo, getAtivo) {
    if (getAtivo.qtdAtivoDisponivel < qtdAtivo) {
      throw new NotFoundError('Quantidade de ativos disponível insuficiente');
    }
    const valorTotal = getAtivo.valorAtivo * qtdAtivo;
    const ativosDisponiveis = getAtivo.qtdAtivoDisponivel - qtdAtivo;
    console.log('====> ', ativosDisponiveis);
    const id = await investimentosModel.add(codCliente, codAtivo, qtdAtivo,
      valorTotal, ativosDisponiveis);
    return id;
  },
  async get(id) {
    const item = await investimentosModel.getTransacao(id);
    return item;
  },
};

module.exports = investimentosService;