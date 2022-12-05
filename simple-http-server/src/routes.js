const getTodos = require('./controller/getTodos');
const createTodos = require('./controller/createTodos');

function handler(req, res) {
  console.log(req.method);

  switch (req.method) {
    case 'GET':
      getTodos(req, res);
      break;
    case 'POST':
      createTodos(req, res);
      break;
    default:
      res.status = 501;
      res.end(
        JSON.stringify({ status: 'error', message: 'Method not implemented' })
      );
  }
}

module.exports = handler;
