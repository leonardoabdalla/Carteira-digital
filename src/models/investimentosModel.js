const db = require('./db');

const investimentosModel = {

  async add(codCliente, codAtivo, qtdAtivo, valorTotal, ativosDisponiveis) {
    const sql = `INSERT INTO db.transactionAssets (codCliente, codAtivo, 
        qtdAtivoCV, tipoTransacaoCV, valorTotTransacao) VALUES (?, ?, ?, ?, ?)`;
    const newAdd = await db.query(sql, [codCliente, codAtivo, qtdAtivo, 3, valorTotal]);
    const sql2 = `UPDATE db.assets SET qtdAtivoDisponivel = ? 
      WHERE codAtivo = ?`;
    await db.query(sql2, [ativosDisponiveis, codAtivo]);
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