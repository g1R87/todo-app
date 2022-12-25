import { Router } from 'express';

import { createUser, getUser, getUsers } from '../controllers/user';
import { validateUserRequest } from '../middlewares/user';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', validateUserRequest, createUser);

export default userRouter;
