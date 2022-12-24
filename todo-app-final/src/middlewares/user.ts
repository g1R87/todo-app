import { NextFunction, Request, Response } from 'express';

export const confirmPasswordValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ message: 'Password and confirm password do not match' });
  }

  next();
};

/*
    @TODO - Sujan
* 1. Create schema based validation
* 2. Add error handling
*
    @Todo - Anuj
* 1. Add other routes for users
*/
