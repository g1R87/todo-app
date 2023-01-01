import dotenv from 'dotenv';
import { HttpError } from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';

import mainRouter from './routes/index';
import { logger } from './utils/logger';
import notFound from './middlewares/notFound';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1', mainRouter);

app.use((err: HttpError, _req: Request, res: Response, _next: NextFunction) => {
  logger.error(err.message);

  res.status(err.statusCode || 500).json({
    status: err.statusCode || 500,
    message: err.message,
  });
});

app.use(notFound);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
