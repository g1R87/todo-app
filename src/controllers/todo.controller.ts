import { Request, Response, NextFunction } from 'express';

import * as todoServices from '../service/todo.service';
import type { UpdateTodo } from '../service/todo.service';

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
    const userId = parseInt(res.locals.user.id, 10);
    const user = await todoServices.createTodo(userId, req.body);
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
    const id = parseInt(req.params.id, 10);
    const { task, completed } = req.body;
    const { isAdmin, id: userId } = res.locals.user;

    const updateTodo: UpdateTodo = {
      userId,
      isAdmin,
      id,
      task,
      completed,
    };

    const updatedUser = await todoServices.updateTodo(updateTodo);
    res.status(201).json({ status: 'success', payload: updatedUser });
  } catch (error: any) {
    next(error);
  }
};
