const TODOS = {
  123: {
    id: 123,
    value: 'Hello world',
    completed: false,
  },
};

function createNewTodo(value) {
  const newTodo = {
    id: Date.now(),
    value,
    completed: false,
  };

  TODOS[newTodo.id] = newTodo;

  return newTodo;
}

function getAllTodos() {
  return Object.values(TODOS);
}

function deleteATodo(id) {
  if (TODOS[id]) {
    const todoToDelete = TODOS[id];

    delete TODOS[id];

    return todoToDelete;
  }

  return null;
}

module.exports = {
  TODOS,
  createNewTodo,
  getAllTodos,
  deleteATodo,
};
