import { Router } from 'express';
import authRouter from './auth.route';
import todoRouter from './todo.route';
import userRouter from './user.route';

const appRouter = Router();

appRouter.use('/user', userRouter);
appRouter.use('/todo', todoRouter);
appRouter.use('/auth', authRouter);


export default appRouter;
