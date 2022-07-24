const ativosModel = require('../models/ativosModel');

const ativosService = {

  async get(id) {
    const ativos = await ativosModel.arrayAtivos(id);
    await ativos.map(async (ativo) => {
      const verificaVenda = await ativosModel.ativosVendas(ativo.codAtivo, ativo.codCliente);
      if (verificaVenda !== undefined) {
        const { codCliente, ...name } = verificaVenda;
        const qtdVenda = name.qtdAtivo;
        const novoValor = ativo.qtdAtivo - qtdVenda;
        // eslint-disable-next-line no-param-reassign
        ativo.qtdAtivo = novoValor;
        const novoArray = ativos;
        console.log('aivos no if ===> ', novoArray);
      } else {
        console.log('no else ==> ', ativos);
        return ativos;
      }
    });
    return ativos;
  },
};

module.exports = ativosService;