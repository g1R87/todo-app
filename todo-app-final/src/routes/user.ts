import { Router } from 'express';

import { validateUserRequest } from '../middlewares/user';
import { createUser, getUser, getUsers } from '../controllers/user';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', validateUserRequest, createUser);

export default userRouter;
