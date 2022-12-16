const todoSchema = require('../schema/todo');
const createError = require('../utils/createError');

const validateCreateTodo = (req, res, next) => {
  try {
    const validationData = todoSchema.validateSync(req.body);

    console.log(validationData);

    next();
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports = {
  validateCreateTodo,
};
