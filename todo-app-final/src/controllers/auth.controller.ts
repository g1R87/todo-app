import createHttpError from 'http-errors';
import { NextFunction, Request, response, Response } from 'express';

import { config } from '../config/default';
import { createToken, verifyToken } from '../utils/jwt';
import { verifyPassword } from '../utils/passwords';
import { getUserByEmail } from '../service/user.service';
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

    const accessToken = createToken(
      userWithoutPassword,
      config.accessTokenKey,
      {
        expiresIn: '5m',
      }
    );

    const refreshToken = createToken(
      userWithoutPassword,
      config.refreshTokenKey,
      {
        expiresIn: '30m',
      }
    );

    res.send(
      createSuccessfulResponse({
        accessToken,
        refreshToken,
        user: userWithoutPassword,
      })
    );
  } catch (error: any) {
    next(error);
  }
};

export const tokenRefresh = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.body;

    const responseDecode = verifyToken(refreshToken, config.refreshTokenKey);

    res.locals.user = responseDecode;

    const { exp, iat, ...user } = res.locals.user;

    const accessToken = createToken(user, config.accessTokenKey, {
      expiresIn: '5m',
    });

    res.send(
      createSuccessfulResponse({
        accessToken,
        refreshToken,
        user: responseDecode,
      })
    );
  } catch (error: any) {
    next(error);
  }
};
