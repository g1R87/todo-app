const express = require('express');
const todoRouter = require('./routes/todoRoutes');

const router = express.Router();

router.use('/todo', todoRouter);

module.exports = router;
