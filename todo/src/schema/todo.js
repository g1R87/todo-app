const yup = require('yup');

const todoSchema = yup.object({
  id: yup.number(),
  task: yup.string('Task must be a string').required('Task is required'),
  completed: yup.boolean('Completed must be a boolean'),
});

module.exports = todoSchema;
