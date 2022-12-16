const express = require('express');

const { validateCreateTodo } = require('../middlewares/todo');
const todoController = require('../controllers/todoController');

const todoRouter = express.Router();

// /api/v1/todo
todoRouter.get('/', todoController.getAllTodos);
todoRouter.post('/', validateCreateTodo, todoController.createTodo);
todoRouter.patch('/:id', todoController.updateTodo);

module.exports = todoRouter;
