const ativosModel = require('../models/ativosModel');

const ativosService = {

  async get(id) {
    const ativos = await ativosModel.arrayAtivos(id);
    console.log('ativos.length ==>', ativos.length);
    let soma = 0;
    for (let i = 0; i < ativos.length; i += 1) {
      const verificaVenda = await ativosModel.ativosVendas(ativos[i]
        .codAtivo, ativos[i].codCliente);
      if (verificaVenda === undefined) {
        soma += 1;
        console.log('soma ==>', soma);
        if (soma === ativos.length) {
          return ativos;
        }
      }
      if (verificaVenda !== undefined) {
        console.log('if != undefined ===> ', verificaVenda);
        const { codCliente, ...name } = verificaVenda;
        const qtdVenda = parseFloat(name.qtdAtivo);
        const novoValor = parseFloat(ativos[i].qtdAtivo) - qtdVenda;
        // eslint-disable-next-line no-param-reassign
        ativos[i].qtdAtivo = novoValor;
        const novoArray = ativos;
        return novoArray;
      }
    }
  },
};

module.exports = ativosService;