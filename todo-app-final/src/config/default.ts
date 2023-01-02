import 'dotenv/config';

const port = parseInt(process.env.PORT as string, 10);

const accessTokenKey = process.env.ACCESS_TOKEN_KEY as string;

const refreshTokenKey = process.env.REFRESH_TOKEN_KEY as string;

export const config = { port, accessTokenKey, refreshTokenKey };
