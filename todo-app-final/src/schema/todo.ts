import * as yup from 'yup'

const todoSchema = yup.object({
    id: yup.number(),
    task: yup.string().strict().required("task is required"),
    completed: yup.boolean()
})

export default todoSchema;