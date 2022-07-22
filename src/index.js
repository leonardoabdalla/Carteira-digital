const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

const db = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
});

app.get('/customers/:id', async (req, res) => {
  try {
    const sql = 'select * from db.customers where cod_cliente = 1';
    const [[item]] = await db.query(sql);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Erro no banco ' });
  }
});

app.listen(3000, () => console.log('rodando na porta 3000'));