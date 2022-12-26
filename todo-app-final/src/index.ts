import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/index';
import { HttpError } from 'http-errors';
import notFound from './middlewares/notFound';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1', mainRouter);

app.use(
  (
    err: HttpError,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log('global error status:', err.statusCode, err.message);
    res.status(err.statusCode || 500).json({
      status: err.statusCode || 500,
      message: err.message,
    });
  }
);

app.use(notFound);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
