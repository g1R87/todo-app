import { Router } from 'express';

import * as userController from '../controllers/user.controller';
import {
  isAdmin,
  isLoggedIn,
  validateUserRequest,
} from '../middlewares/user.middleware';

const userRouter = Router();

userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userController.getUser);
userRouter.post('/', validateUserRequest, userController.createUser);
userRouter.put(
  '/:id',
  validateUserRequest,
  isLoggedIn,
  userController.updateUser
);
userRouter.delete('/:id', isLoggedIn, isAdmin, userController.deleteUser);

export default userRouter;
