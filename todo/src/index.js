const dotenv = require('dotenv');
const express = require('express');

const router = require('./routes');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('API running successfully');
});

app.use('/api/v1', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// /api/[version]/todo -> api/v1/todo
