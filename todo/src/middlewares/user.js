const userSchema = require('../schema/user');
const createError = require('../utils/createError');

const validateUserRequest = (req, res, next) => {
  try {
    const { body } = req;

    userSchema.validateSync(body);
    next();
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports = {
  validateUserRequest,
};
