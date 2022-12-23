import express from 'express';
import dotenv from 'dotenv';

import mainRouter from './routes/index';
import { statusError } from './utils/createError';


dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1', mainRouter);

//error handling middleware
app.use((err:statusError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500)
    .json({
      status: err.status || 500,
      message:err.message
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

