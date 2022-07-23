const db = require('./db');

const contaModel = {

  async addSaque(codCliente, valor, contaCliente) {
    const sqlRegistro = `INSERT INTO db.transactionSqDep (codCliente, valor, tipoTransacaoSD) 
    VALUES (?, ?, ?)`;
    await db.query(sqlRegistro, [codCliente, valor, 1]);

    const sqlAtualizaSaldo = `UPDATE db.customers SET saldo = ? 
      WHERE codCliente = ?`;
    const saldoAtualizado = await db.query(sqlAtualizaSaldo, [contaCliente, codCliente]);

    return saldoAtualizado;
  },
};

module.exports = contaModel;