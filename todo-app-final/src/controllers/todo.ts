import { Request, Response, NextFunction } from 'express';
import * as todoServices from '../service/todo';
import { createSuccessfulResponse } from '../utils/response';

export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { userId, isAdmin } = res.locals.user;
    const userId = res.locals.user.id;
    const isAdmin = res.locals.user.isAdmin;
    const q = req.query.q as string;
    const allTodo = await todoServices.getTodo(userId, isAdmin, q);
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
    const userId = res.locals.user.id;
    const isAdmin = res.locals.user.isAdmin;
    const id = req.body.id;
    const deletedTodo = await todoServices.deleteTodo(userId, isAdmin, id);
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
    const { id, task, completed } = req.body;
    const userId = res.locals.user.id;
    const isAdmin = res.locals.user.isAdmin;

    const updatedUser = await todoServices.updateTodo(
      userId,
      isAdmin,
      id,
      task,
      completed
    );
    res.status(201).json({ status: 'success', payload: updatedUser });
  } catch (error: any) {
    next(error);
  }
};
