import { Request, Response, NextFunction } from 'express';
import * as todoServices from '../service/todo';
import { createSuccessfulResponse } from '../utils/response';

export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, isAdmin } = res.locals.user;
    const q = req.query.q as string;
    const allTodo = await todoServices.getTodo(id, isAdmin, q);
    res.status(200).send(createSuccessfulResponse(allTodo));
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { task } = req.body;
    const userId = res.locals.user.id;
    const user = await todoServices.createTodo(userId, task);
    res.status(201).json(createSuccessfulResponse(user));
  } catch (error: any) {
    next(error);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, isAdmin } = res.locals.user;
    const todoId = +req.params.id;
    const deletedTodo = await todoServices.deleteTodo(id, isAdmin, todoId);
    res.status(201).json({ status: 'success', payload: deletedTodo });
  } catch (error: any) {
    next(error);
  }
};

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { task, completed } = req.body;
    const todoId = +req.params.id;
    const userId = res.locals.user.id;
    const isAdmin = res.locals.user.isAdmin;

    const updatedUser = await todoServices.updateTodo(
      userId,
      isAdmin,
      todoId,
      task,
      completed
    );
    res.status(201).json({ status: 'success', payload: updatedUser });
  } catch (error: any) {
    next(error);
  }
};
