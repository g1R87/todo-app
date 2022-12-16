const createError = require('../utils/createError');

const validateCreateTodo = (req, res, next) => {
  if (req.body.task) {
    next();
  }

  next(createError(400, 'Task not provided'));
};

module.exports = {
  validateCreateTodo,
};
