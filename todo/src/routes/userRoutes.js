const express = require('express');
const { createUser } = require('../controllers/userController');
const { validateUserRequest } = require('../middlewares/user');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('Hello from user router');
});

userRouter.post('/', validateUserRequest, createUser);

module.exports = userRouter;
