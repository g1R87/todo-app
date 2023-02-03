import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';

import { todoCreate, todoUpdate } from '../schema/todo.schema';

export const validateTodo = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    if (req.method === 'POST') {
      todoCreate.validateSync(req.body);
      next();
    }
    if (req.method === 'PUT') {
      todoUpdate.validateSync(req.body);
      next();
    }
  } catch (error: any) {
    next(createError(400, error.message));
  }
};
