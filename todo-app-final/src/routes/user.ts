import { Router } from 'express';

import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/user';
import { isAdmin, isLoggedIn, validateUserRequest } from '../middlewares/user';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', validateUserRequest, createUser);
userRouter.put('/:id', isLoggedIn, updateUser);
userRouter.delete('/:id', isLoggedIn, isAdmin, deleteUser);

export default userRouter;
