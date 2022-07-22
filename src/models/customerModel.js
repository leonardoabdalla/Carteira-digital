const db = require('./db');

const charactersModel = {

  async get(id) {
    const sql = `
      SELECT * 
      FROM db.customers 
      WHERE id = ?
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

  // async add(data) {
  //   const sql = `
  //     INSERT INTO db.customers (name) 
  //     VALUES (?)
  //   `;
  //   const [{ insertId }] = await db.query(sql, [data.name]);
  //   return insertId;
  // },
};

module.exports = charactersModel;