import express from 'express';
import dotenv from 'dotenv';

import mainRouter from './routes/index';

dotenv.config();
const app = express();

app.use('/api/v1', mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
