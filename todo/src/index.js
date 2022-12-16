const dotenv = require('dotenv');
const express = require('express');
const logger = require('./middlewares/logger');

const router = require('./routes');
const { errorResponse } = require('./utils/responses');

dotenv.config();

const app = express();

app.use(express.json());
app.use(logger);

app.get('/health', (req, res) => {
  res.send('API running successfully');
});

app.use('/api/v1', router);

//app.use('*')
//

app.use((err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .send(errorResponse(err.message || 'Something went wrong'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// /api/[version]/todo -> api/v1/todo
