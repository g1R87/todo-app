const { TODOS } = require('../todos');

function getTodos(req, res) {
  res.status = 200;
  res.end(JSON.stringify({ status: 'success', payload: TODOS }));
}

module.exports = getTodos;
