const express = require('express');

const todoController = require('../controllers/todoController');

const todoRouter = express.Router();

// /api/v1/todo
todoRouter.get('/', todoController.getAllTodos);
todoRouter.post('/', todoController.createTodo);
todoRouter.patch('/:id', todoController.updateTodo);

module.exports = todoRouter;
