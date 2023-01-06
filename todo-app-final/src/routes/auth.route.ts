import {
  verifyNewUser,
  verifyForgotPassword,
} from '../controllers/verify.controller';
import { Router } from 'express';
import { login, tokenRefresh } from '../controllers/auth.controller';
import { forgetPassword } from '../controllers/password.controller';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.get('/verify/:token', verifyNewUser);
authRouter.post('/password-reset', forgetPassword);
authRouter.post('/password-reset/:token', verifyForgotPassword);
authRouter.post('/token-refresh', tokenRefresh);

export default authRouter;
