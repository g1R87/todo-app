import createError from 'http-errors';
import { NextFunction, Request, Response } from 'express';

import { config } from '../config/default';
import { verifyToken } from '../utils/jwt';
import userSchema from '../schema/user.schema';

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

    if (!token) throw 'error';

    const user = verifyToken(token, config.accessTokenKey);

    res.locals.user = user;

    next();
  } catch (error: any) {
    throw createError(401, 'Unauthorized');
  }
};

export const isAdmin = (_req: Request, res: Response, next: NextFunction) => {
  try {
    if (res.locals.user.isAdmin) throw 'error';

    next();
  } catch (error: any) {
    throw createError(403, 'Unauthorized');
  }
};
