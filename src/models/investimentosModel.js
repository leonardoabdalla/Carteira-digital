/* eslint-disable max-params */
const db = require('./db');

const investimentosModel = {

  async add(codCliente, codAtivo, qtdAtivo, valorTotal, ativosDisponiveis) {
    const sql = `INSERT INTO db.transactionAssets (codCliente, codAtivo, 
        qtdAtivo, tipoTransacaoCV, valorTotTransacao) VALUES (?, ?, ?, ?, ?)`;
    const newAdd = await db.query(sql, [codCliente, codAtivo, qtdAtivo, 3, valorTotal]);
    const sqlUpdate = `UPDATE db.assets SET qtdAtivoDisponivel = ? 
      WHERE codAtivo = ?`;
    await db.query(sqlUpdate, [ativosDisponiveis, codAtivo]);
    return newAdd[0].insertId;
  },

  async filtroInvestimento(codCliente, codAtivo) {
    const sqlVenda = `SELECT SUM(qtdAtivo) FROM db.transactionAssets 
      WHERE codCliente = ? AND codAtivo = ? AND tipoTransacaoCV = 4`;
    const [[getFilterVenda]] = await db.query(sqlVenda, [codCliente, codAtivo]);
    const filterVenda = Object.values(getFilterVenda);
    const resultVenda = filterVenda[0];
    console.log('===> model venda ===> ', resultVenda);

    const sqlCompra = `SELECT SUM(qtdAtivo) FROM db.transactionAssets 
      WHERE codCliente = ? AND codAtivo = ? AND tipoTransacaoCV = 3`;
    const [[getFilterCompra]] = await db.query(sqlCompra, [codCliente, codAtivo]);
    const filterCompra = Object.values(getFilterCompra);
    const resultCompra = filterCompra[0];
    console.log('===> model compra ===> ', resultCompra);
    const venda_compra = {
      resultVenda,
      resultCompra
    }

    return venda_compra;
  },

  async addVenda(codCliente, codAtivo, qtdAtivo, valorTotal, devolvendoAtivos) {
    const sql = `INSERT INTO db.transactionAssets (codCliente, codAtivo, 
        qtdAtivo, tipoTransacaoCV, valorTotTransacao) VALUES (?, ?, ?, ?, ?)`;
    const newAdd = await db.query(sql, [codCliente, codAtivo, qtdAtivo, 4, valorTotal]);
    const sqlUpdate = `UPDATE db.assets SET qtdAtivoDisponivel = ? 
      WHERE codAtivo = ?`;
    await db.query(sqlUpdate, [devolvendoAtivos, codAtivo]);
    return newAdd[0].insertId;
  },

  async getTransacao(id) {
    const sql = `
      SELECT * 
      FROM db.transactionAssets 
      WHERE codTransacaoCV = ?
    `;
    const [[item]] = await db.query(sql, [id]);
    return item;
  },
};

module.exports = investimentosModel;