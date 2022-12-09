const { getAllTodos } = require('../todos');

function getTodos(req, res) {
  res.writeHead(200);
  res.end(JSON.stringify({ status: 'success', payload: getAllTodos() }));
}

module.exports = getTodos;
