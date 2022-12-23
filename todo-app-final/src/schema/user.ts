import * as yup from 'yup';

const userSchema = yup.object({
  name: yup
    .string()
    .strict()
    .min(3, 'Name cannot be less than 3 characters long')
    .required('Name is required'),
  email: yup.string().email().required('E-mail is required'),
  password: yup.string().min(6, 'Password must be atleast 6 characters long'),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export default userSchema;
