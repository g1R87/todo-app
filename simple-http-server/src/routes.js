const getTodos = require('./controller/getTodos');
const createTodos = require('./controller/createTodos');
const deleteTodo = require('./controller/delete');

function handler(req, res) {
  console.log(req.method);

  switch (req.method) {
    case 'GET':
      getTodos(req, res);
      break;
    case 'POST':
      createTodos(req, res);
      break;
    case 'DELETE':
      deleteTodo(req, res);
      break;
    default:
      res.writeHead(501, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({ status: 'error', message: 'Method not implemented' })
      );
  }
}

module.exports = handler;
