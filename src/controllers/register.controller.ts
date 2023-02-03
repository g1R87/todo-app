import { Request, Response, NextFunction } from 'express';

import { registerUser } from '../service/user.service';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await registerUser(req.body);

    const { password,...userPayload } = newUser;

    res
      .status(201)
      .json({ status: 'Please Check Email to verify your account!', payload: userPayload });
  } catch (error: any) {
    next(error);
  }
};
