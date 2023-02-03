import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

import { config } from '../config/default';

import { getUserByEmail } from '../service/user.service';

import { createToken, verifyToken } from '../utils/jwt';
import { verifyPassword } from '../utils/passwords';
import { createSuccessfulResponse } from '../utils/response';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
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
        expiresIn: '30m',
      }
    );

    const refreshToken = createToken(
      userWithoutPassword,
      config.refreshTokenKey,
      {
        expiresIn: '60m',
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
    console.log(responseDecode);
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
