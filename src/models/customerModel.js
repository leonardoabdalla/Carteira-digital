const db = require('./db');

const customersModel = {

  async exists(id) {
    const sql = `
      SELECT 1 
      FROM db.customers 
      WHERE codCliente = ?
    `;
    const [[exists]] = await db.query(sql, [id]);
    return !!exists;
  },

  async get(id) {
    const sql = `
      SELECT * 
      FROM db.customers 
      WHERE codCliente = ?
    `;
    const [[item]] = await db.query(sql, [id]);
    return item;
  },

  async list() {
    const sql = `
      SELECT * 
      FROM db.customers
    `;
    const [items] = await db.query(sql);
    return items;
  },
};

module.exports = customersModel;