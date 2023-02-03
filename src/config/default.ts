import 'dotenv/config';

const port = parseInt(process.env.PORT as string, 10);

const accessTokenKey = process.env.ACCESS_TOKEN_KEY as string;

const refreshTokenKey = process.env.REFRESH_TOKEN_KEY as string;

const user = process.env.user as string;
const pass = process.env.pass as string;

export const config = {
  port,
  accessTokenKey,
  refreshTokenKey,
  smtp: {
    user: 'uiwkn6qyoswx7k6b@ethereal.email',
    pass: 'SX9mteePhUKUVhy82C',
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
  },
  user,
  pass
};
