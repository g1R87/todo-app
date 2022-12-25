import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';

import mainRouter from './routes/index';
import { logger } from './utils/logger';
import { statusError } from './utils/createError';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1', mainRouter);

//error handling middleware
app.use(
  (err: statusError, _req: Request, res: Response, _next: NextFunction) => {
    res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.message,
    });
    logger.error(`[${err.status || 500}] - ${err.message}`);
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
