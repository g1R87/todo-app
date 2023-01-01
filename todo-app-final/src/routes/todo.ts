import { Router } from "express";
import * as todoController from "../controllers/todo"
import { validateTodo } from "../middlewares/todo";
import { isLoggedIn } from "../middlewares/user";
const todoRouter = Router();

todoRouter.get('/',isLoggedIn,todoController.getTodo)
todoRouter.post('/',isLoggedIn,validateTodo,todoController.createTodo)
todoRouter.put('/:id',isLoggedIn,validateTodo,todoController.updateTodo)
todoRouter.delete('/:id',isLoggedIn,todoController.deleteTodo)

export default todoRouter;

//todo research nodemailer and template engines