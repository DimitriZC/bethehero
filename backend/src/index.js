const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação) ==> req.query
  * Route Params: Parâmetros utilizados para identificar recursos ==> req.params
  * Request Body: Corpo da requiseção, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, ...
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

app.post('/users', (req, res) => {
  const body = req.body;

  console.log(body);

  return res.json({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Dimitri Zuave'
  });
});

app.listen(3333)