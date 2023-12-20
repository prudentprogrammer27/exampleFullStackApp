import express from 'express';
import path from 'path';
import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;
const app = express();

const expressPort = 8002;

const connectionString = process.env.DATABASE_URL;

const pool = new Pool ({
  connectionString,
  // user: 'kevingoble',
  // host: 'postgres://galvanize:Ki3NrzP5kzGbxF1Qa3lTNc5opa6TgnyB@dpg-cm1lngi1hbls73bp8ok0-a.oregon-postgres.render.com/items_kgqg',
  // password: 'Ki3NrzP5kzGbxF1Qa3lTNc5opa6TgnyB'
  // database: 'items_kgqg',
  // port: 5432
});

app.use(express.static('public'));
app.use(express.json());

app.get('/items', (req,res) => {
  pool.query('SELECT * FROM items')
    .then((data) => res.send(data.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).send("Sorry!");
    })
});


app.listen(expressPort, () => {
  console.log(`Listening on port ${expressPort}...`);
})