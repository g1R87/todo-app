import { Router } from 'express';

import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/user';
import { validateUserRequest } from '../middlewares/user';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', validateUserRequest, createUser);
userRouter.put('/update/:id', validateUserRequest, updateUser);
userRouter.delete('/delete/:id', deleteUser);

export default userRouter;
