const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000; // Porta da sua API

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tpc_challange',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida');
});

app.use(bodyParser.json());

// Rota de autenticação
app.post('/authenticate', (req, res) => {
    const { username, password } = req.query;
  
    const query = 'SELECT * FROM tb_hl_cliente WHERE cpf_cnpj_cliente = ? AND pass = ?';
    db.query(query, [username, password], (err, results) => {
      if (err) {
        console.error('Erro ao consultar o banco de dados:', err);
        res.status(500).json({ message: 'Erro interno do servidor' });
        return;
      }
  
      if (results.length === 1) {
        const user = results[0];
        res.status(200).json({ message: 'Autenticação bem-sucedida', user });
      } else {
        let errors = [];
        if (results.length === 0) {
          errors.push('Credencial de usuário não encontrada.');
        }
        if (results.length > 0 && results[0].pass !== password) {
          errors.push('Senha incorreta.');
        }
        res.status(401).json({ message: 'Credenciais inválidas', errors });
      }
    });
  });

app.use(bodyParser.json());

// Rota de consulta por CPF
app.get('/consulta/:idCliente', (req, res) => {
    const { idCliente } = req.params;
  
    const query = `
      SELECT
          s.id_servico,
          s.id_cliente,
          s.id_prestador,
          s.hora_servico,
          s.local_usuario,
          s.status_ordem,
          c.nome_cliente AS nome_cliente,
          p.id_prestador AS id_prestador,
          p.local_prestador AS local_prestador
      FROM
          tb_hl_servico AS s
          JOIN tb_hl_cliente AS c ON s.id_cliente = c.id_cliente
          JOIN tb_hl_prestador AS p ON s.id_prestador = p.id_prestador
      WHERE
          s.id_cliente = ?
    `;
  
    db.query(query, [idCliente], (err, results) => {
      if (err) {
        console.error('Erro ao consultar o banco de dados:', err);
        res.status(500).json({ message: 'Erro interno do servidor' });
        return;
      }
  
      res.status(200).json({ services: results });
    });
  });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
