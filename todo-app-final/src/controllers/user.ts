import { Request, Response } from 'express';

import * as userService from '../service/user';
import { logger } from '../utils/logger';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const allUsers = await userService.getAllUsers();
    res.status(200).json({ status: 'success', payload: allUsers });
  } catch (error: any) {
    logger.error(`[ERROR] - ${error.message}`);
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const allUsers = await userService.getUser(+req.params.id);
    res.status(200).json({ status: 'success', payload: allUsers });
  } catch (error: any) {
    logger.error(`[ERROR] - ${error.message}`);
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userService.createUser(name, email, password);

    res.status(201).json({ status: 'success', payload: newUser });
  } catch (error: any) {
    logger.error(`[ERROR] - ${error.message}`);
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const id = parseInt(req.params.id, 10);
    const updateUser = await userService.updateUser(id, name, email, password);

    res.status(201).json({ status: 'success', payload: updateUser });
  } catch (error: any) {
    logger.error(`[ERROR] - ${error.message}`);
    res.status(404).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deleteUser = await userService.deleteUser(id);

    res.status(201).json({ status: 'success', payload: deleteUser });
  } catch (error: any) {
    logger.error(`[ERROR] - ${error.message}`);
    res.status(404).json({ message: error.message });
  }
};
