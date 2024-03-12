const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const tspSolver = require('./frontend/src/scripts/tspSolver.js'); 
const dotenv = require('dotenv');  // Adiciona esta linha
dotenv.config();
const app = express();
const port = 3001;

app.post('/solve-tsp', (req, res) => {
    console.log('solve-tsp');
    const pontos = req.body.pontos;
    const melhorCaminho = tspSolver.tsp2opt(pontos);
  
    res.json({
      melhorCaminho,
      distanciaTotal: tspSolver.calcularCaminhoDistancia(melhorCaminho, pontos),
    });
  });

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'facilitajuridicodb',
  password: process.env.DB_PASSWORD,
  port: 5432,
});

app.use(express.json());
app.use(cors()); // Adiciona o middleware cors

app.get('/clients', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM clients');
  res.json(rows);
});

app.post('/clients', async (req, res) => {
  const { name, email, telefone, coord_x, coord_y } = req.body;
  const { rows } = await pool.query('INSERT INTO clients (name, email, telefone, coord_x, coord_y) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, email, telefone, coord_x, coord_y]);
  res.json(rows[0]);
});

app.delete('/clients', async (req, res) => {
    const { selectedUserIds } = req.body;
  
    try {
      const result = await pool.query('DELETE FROM clients WHERE id = ANY($1) RETURNING *', [selectedUserIds]);
  
      if (result.rowCount > 0) {
        res.json({ success: true, message: 'Usuários excluídos com sucesso.' });
      } else {
        res.status(404).json({ success: false, message: 'Nenhum usuário encontrado para exclusão.' });
      }
    } catch (error) {
      console.error('Erro ao excluir usuários:', error);
      res.status(500).json({ success: false, message: 'Erro interno do servidor.' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Testando a conexão com o banco de dados
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados:', err.stack);
  }
  console.log('Conexão com o banco de dados estabelecida.');
  release(); // Liberar o cliente de volta para o pool
});

app.listen(port, () => {
  console.log('Server is running on port ${port}');
});