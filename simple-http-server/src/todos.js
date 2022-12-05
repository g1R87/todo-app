const TODOS = [
  {
    id: 123,
    value: 'Hello world',
    completed: false,
  },
];

function createNewTodo(value) {
  return {
    id: Date.now(),
    value,
    completed: false,
  };
}

module.exports = {
  TODOS,
  createNewTodo,
};
