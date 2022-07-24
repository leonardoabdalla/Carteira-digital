const ativosModel = require('../models/ativosModel');

const ativosService = {

  // eslint-disable-next-line max-lines-per-function, sonarjs/cognitive-complexity
  async get(id) {
    const ativos = await ativosModel.arrayAtivos(id);
    let soma = 0;
    for (let i = 0; i < ativos.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const verificaVenda = await ativosModel.ativosVendas(ativos[i]
        .codAtivo, ativos[i].codCliente);
      if (verificaVenda === undefined) {
        soma += 1;
        if (soma === ativos.length) {
          return ativos;
        }
      }
      if (verificaVenda !== undefined) {
        const { codCliente, ...name } = verificaVenda;
        const qtdVenda = parseFloat(name.qtdAtivo);
        const novoValor = parseFloat(ativos[i].qtdAtivo) - qtdVenda;
        ativos[i].qtdAtivo = novoValor;
        const novoArray = ativos;
        return novoArray;
      }
    }
  },
};

module.exports = ativosService;