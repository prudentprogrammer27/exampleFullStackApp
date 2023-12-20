import express from 'express';
import path from 'path';
import pg from 'pg';

const { Pool } = pg;
const app = express();

const expressPort = 8002;

const pool = new Pool ({
  user: 'kevingoble',
  host: 'localhost',
  database: 'items',
  port: 5432
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