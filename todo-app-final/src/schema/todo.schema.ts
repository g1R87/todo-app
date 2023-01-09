import * as yup from 'yup';

export const todoCreate = yup.object({
  id: yup.number(),
  task: yup.string().strict().required('task is required'),
  completed: yup.boolean(),
});

export const todoUpdate = yup.object({
  id: yup.number(),
  task: yup.string().strict(),
  completed: yup.boolean(),
});
