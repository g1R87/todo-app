const { deleteATodo } = require('../todos');
const { parseBody } = require('../utils/http');

const deleteTodo = async (req, res) => {
  const data = await parseBody(req);

  const deletedTodo = deleteATodo(data.id);

  res.end(JSON.stringify({ status: 'Success', payload: deletedTodo }));
};

module.exports = deleteTodo;
