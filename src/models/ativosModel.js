const db = require('./db');

const ativosModel = {

  async arrayAtivos(id) {
    const sql = `SELECT ts.codCliente, ts.codAtivo, SUM(ts.qtdAtivo) AS qtdAtivo, 
      ts.tipoTransacaoCV, ass.valorAtivo
      FROM db.transactionAssets AS  ts 
      INNER JOIN db.assets AS ass
      ON ts.codAtivo = ass.codAtivo
      WHERE ts.codCliente = ? AND ts.tipoTransacaoCV = 3
      GROUP BY (codAtivo);`;
    const [valores] = await db.query(sql, [id]);
    return valores;
  },

  async ativosVendas(ativo, cliente) {
    const sql = `SELECT SUM(qtdAtivo) AS qtdAtivo, codAtivo FROM db.transactionAssets
    WHERE codCliente = ? AND codAtivo = ? AND tipoTransacaoCV = 4
    GROUP BY (codAtivo)`;

    const [[vendas]] = await db.query(sql, [cliente, ativo]);

    return vendas;
  },
};

module.exports = ativosModel;