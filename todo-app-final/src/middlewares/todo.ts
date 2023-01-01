import { Request,Response, NextFunction } from "express"
import createError from 'http-errors';
import todoSchema from "../schema/todo";

export const validateTodo = (req:Request, res: Response, next: NextFunction) => {
    try {
        todoSchema.validateSync(req.body);
        next();
        } catch (error: any) {
        next(createError(404, error.message));
    }
}



