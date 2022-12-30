import { Router } from 'express';
import authRouter from './auth';
import todoRouter from './todo'
import userRouter from './user';

const appRouter = Router();

appRouter.use('/user', userRouter);
appRouter.use('/todo',todoRouter)
appRouter.use('/auth', authRouter);

export default appRouter;
