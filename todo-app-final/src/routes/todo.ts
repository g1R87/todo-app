import { Router } from "express";
import * as todoController from "../controllers/todo"
import { validateTodo } from "../middlewares/todo";
import { isLoggedIn } from "../middlewares/user";
const todoRouter = Router();

todoRouter.get('/',isLoggedIn,todoController.getTodo) //need to insert auth and isadmin
todoRouter.post('/',isLoggedIn,validateTodo,todoController.createTodo)
todoRouter.put('/',isLoggedIn,todoController.updateTodo)
todoRouter.delete('/',isLoggedIn,todoController.deleteTodo)

export default todoRouter;