const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const userRouter = require('./routes/userRoutes');

const router = express.Router();

router.use('/todo', todoRouter);

router.use('/users', userRouter);

module.exports = router;
