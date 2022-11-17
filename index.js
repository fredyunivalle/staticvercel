require('dotenv').config()
const express = require('express')
const path = require('path');
const app = express()

const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.POSTGRESURI,
    ssl: {
      rejectUnauthorized: false
    }
  });

  client.connect();

  app.get('/consultandotabla', async (req, res) => {
    //const { id } = req.params
    const { rows } = await client.query('SELECT * FROM tabla_a');
    res.send(rows);
  });  

  


const port = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'public')))





app.get('/saludo', (req, res) => {
    res.send('Hello World!')
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
