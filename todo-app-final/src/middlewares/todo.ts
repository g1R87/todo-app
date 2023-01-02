import { Request,Response, NextFunction } from "express"
import createError from 'http-errors';
import {todoCreate, todoUpdate} from "../schema/todo";

export const validateTodo = (req:Request, res: Response, next: NextFunction) => {
    try {
        if(req.method === 'POST'){todoCreate.validateSync(req.body);
        next();}
        if(req.method === 'PUT'){
            todoUpdate.validateSync(req.body);
            next();
        }
        } catch (error: any) {
        next(createError(404, error.message));
    }
}



