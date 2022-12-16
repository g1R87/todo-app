const userService = require('../service/user');

const getUsers = (req, res) => {};

const createUser = (req, res) => {
  const { body } = req;

  const newUser = userService.createUser(body);

  res.status(201).json(newUser);
};

module.exports = {
  getUsers,
  createUser,
};
