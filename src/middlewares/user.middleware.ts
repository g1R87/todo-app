import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

import { config } from '../config/default';

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
    console.log(req.body);
    const token = req.headers.authorization?.split(' ')[1];
    console.log(' token: ', token);
    if (!token) throw 'error';

    const user = verifyToken(token, config.accessTokenKey);
    //test
    console.log('verifie: ', user);
    res.locals.user = user;
    //test2
    console.log('local: ', res.locals.user);

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
