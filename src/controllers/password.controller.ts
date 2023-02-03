import { Request, Response, NextFunction } from 'express';
import { config } from '../config/default';
import { getUserByEmail } from '../service/user.service';
import { createToken } from '../utils/jwt';
import { sendEmail } from '../utils/nodemailer';

export const forgetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('helo helo');
    const { email } = req.body;
    const user = await getUserByEmail(email);

    const token = createToken({ email: email }, config.accessTokenKey, {
      expiresIn: '5m',
    });

    await sendEmail({
      from: 'giri.sujan87@outlook.com',
      to: email,
      subject: 'Forgot Password',
      html: `Click <a href= http://localhost:3000/api/v1/auth/password-reset/${token}> here </a> to reset yout password.`,
    });

    res
      .status(201)
      .json({ message: 'please check your email to reset the passwrod' });
  } catch (error) {
    next(error);
  }
};
