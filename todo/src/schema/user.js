const yup = require('yup');

const userSchema = yup.object({
  id: yup.number(),
  name: yup
    .string('Name must be a string')
    .max(8, 'Name cannot me more than 8 characters long')
    .min(3, 'Name must be 3 characters long')
    .required('Name is required'),
  email: yup
    .string('Must be a string')
    .email('Email must be a valid email')
    .required('Email is required'),
});

module.exports = userSchema;
