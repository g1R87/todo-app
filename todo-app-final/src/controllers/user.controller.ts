import { Request, Response, NextFunction } from 'express';

import * as userService from '../service/user.service';

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allUsers = await userService.getAllUsers();
    res.status(200).json({ status: 'success', payload: allUsers });
  } catch (error: any) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allUsers = await userService.getUser(+req.params.id);
    res.status(200).json({ status: 'success', payload: allUsers });
  } catch (error: any) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await userService.createUser(req.body);

    const { password, ...userWithoutPassword } = newUser;

    res.status(201).json({ status: 'success', payload: userWithoutPassword });
  } catch (error: any) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id, 10);

    const updateUser = await userService.updateUser(id, req.body);

    res.status(201).json({ status: 'success', payload: updateUser });
  } catch (error: any) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deleteUser = await userService.deleteUser(id);

    res.status(201).json({ status: 'success', payload: deleteUser });
  } catch (error: any) {
    next(error);
  }
};
