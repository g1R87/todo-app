import { Request, Response, NextFunction } from 'express';
import { createSuccessfulResponse } from '../utils/response';
import {
  getUserByEmail,
  resetPassword,
  updateVerify,
} from '../service/user.service';
import { config } from '../config/default';
import jwt from 'jsonwebtoken';

type jwtPayload = {
  email: string;
};

export const verifyNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.params;
    const userDecoded = jwt.verify(token, config.accessTokenKey) as jwtPayload;
    await getUserByEmail(userDecoded.email);
    await updateVerify(userDecoded.email, true);

    res.status(200).send(createSuccessfulResponse('Successfully Verified!'));
  } catch (error: any) {
    next(error);
  }
};

export const verifyForgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.params;
    const userDecoded = jwt.verify(token, config.accessTokenKey) as jwtPayload;
    await getUserByEmail(userDecoded.email);
    await resetPassword(req.body, userDecoded.email);

    res.status(200).send(createSuccessfulResponse('Successfully Reset!'));
  } catch (error: any) {
    next(error);
  }
};
