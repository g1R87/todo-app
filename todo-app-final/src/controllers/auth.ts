import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { getUserByEmail } from '../service/user';
import { verifyPassword } from '../utils/passwords';
import { createSuccessfulResponse } from '../utils/response';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('Missing email or password');
    }

    const user = await getUserByEmail(email);

    const passwordVerificationStatus = await verifyPassword(
      password,
      user.password
    );

    if (!passwordVerificationStatus) {
      throw createHttpError(401, 'Invalid credentials');
    }

    const { password: _, ...userWithoutPassword } = user;

    res.send(createSuccessfulResponse(userWithoutPassword));
  } catch (error: any) {
    next(error);
  }
};
