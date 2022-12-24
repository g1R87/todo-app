import { Router } from 'express';

import { createUser, getUser, getUsers } from '../controllers/user';
import { confirmPasswordValidation } from '../middlewares/user';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', confirmPasswordValidation, createUser);

export default userRouter;
