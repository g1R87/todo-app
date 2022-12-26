import { Router } from 'express';
import authRouter from './auth';

import userRouter from './user';

const appRouter = Router();

appRouter.use('/user', userRouter);
appRouter.use('/auth', authRouter);

export default appRouter;
