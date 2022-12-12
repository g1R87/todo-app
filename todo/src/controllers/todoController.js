const todoService = require('../service/todo');
const { successfullResponse } = require('../utils/responses');

const getAllTodos = (req, res) => {
  res.send(successfullResponse(todoService.getAllTodo()));
};

const createTodo = (req, res) => {
  const todo = todoService.createTodo(req.body);

  res.status(201).send(successfullResponse(todo));
};

const updateTodo = (req, res) => {
  const todo = todoService.updateTodo(req.params.id, req.body);

  res.status(200).send(successfullResponse(todo));
};

module.exports = { getAllTodos, createTodo, updateTodo };
