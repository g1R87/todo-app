const createError = require('../utils/createError');

let TODO = {};

const getAllTodo = () => {
  return Object.values(TODO);
};

const createTodo = (body) => {
  const { task } = body;

  const newTodo = {
    id: Date.now(),
    task,
    completed: false,
  };

  TODO = {
    ...TODO,
    [newTodo.id]: newTodo,
  };

  return newTodo;
};

const updateTodo = (id, body) => {
  const { task, completed } = body;

  let todo = TODO[id];

  if (!todo) {
    throw createError(404, 'Todo not found');
  }

  delete TODO[id];

  todo = {
    ...todo,
    task: task ? task : todo.task,
    completed: completed ? completed : todo.completed,
  };

  TODO[todo.id] = todo;

  return todo;
};

const deleteTodo = async (id) => {
  if (TODO[id]) {
    const todo = TODO[id];
    delete TODO[id];

    return todo;
  }

  throw createError(404, 'Todo not found');
};

module.exports = { getAllTodo, createTodo, updateTodo, deleteTodo };
