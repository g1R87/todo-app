import createError from 'http-errors';
import { NextFunction, Request, Response } from 'express';

import userSchema from '../schema/user.schema';
import { verifyToken } from '../utils/jwt';

export const validateUserRequest = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    userSchema.validateSync(req.body);
    next();
  } catch (error: any) {
    next(createError(404, error.message));
  }
};

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw 'error';
    }

    const user = verifyToken(token, process.env.JWT_SECRET as string);

    res.locals.user = user;

    next();
  } catch (error: any) {
    throw createError(401, 'Unauthorized');
  }
};

export const isAdmin = (_req: Request, res: Response, next: NextFunction) => {
  try {
    if (res.locals.user.isAdmin) {
      throw 'error';
    }

    next();
  } catch (error: any) {
    throw createError(403, 'Unauthorized');
  }
};
