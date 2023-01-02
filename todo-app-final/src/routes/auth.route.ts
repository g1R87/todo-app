import { Router } from 'express';
import { login, tokenRefresh } from '../controllers/auth.controller';

const authRouter = Router();

authRouter.post('/login', login);

authRouter.post('/token-refresh', tokenRefresh);

export default authRouter;
