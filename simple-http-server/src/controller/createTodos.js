const { createNewTodo } = require('../todos');
const { parseBody } = require('../utils/http');

function validateInput(body) {
  if (!body.value && typeof body.value !== 'string') {
    return false;
  }

  return true;
}

async function createTodos(req, res) {
  //validateInput(value);
  const body = await parseBody(req);

  if (validateInput(body)) {
    const newTodo = createNewTodo(body.value);

    res.end(JSON.stringify({ status: 'Success', payload: newTodo }));
  } else {
    res.writeHead(400, { 'Content-Type': 'application/json' });

    res.end(
      JSON.stringify({ status: 'Error', message: 'Wrong type of value sent' })
    );
  }
}

module.exports = createTodos;
