const db = require('./db');

const assetsModel = {

  async exists(id) {
    const sql = `
      SELECT 1 
      FROM db.assets 
      WHERE codAtivo = ?
    `;
    const [[exists]] = await db.query(sql, [id]);
    return !!exists;
  },

  async get(id) {
    const sql = `
      SELECT * 
      FROM db.assets 
      WHERE codAtivo = ?
    `;
    const [[item]] = await db.query(sql, [id]);
    return item;
  },

  async list() {
    const sql = `
      SELECT * 
      FROM db.assets
    `;
    const [items] = await db.query(sql);
    return items;
  },

};

module.exports = assetsModel;