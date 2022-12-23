import {Request, Response,NextFunction } from "express";

import * as userService from "../service/user";
import { createError } from "../utils/createError";

export const getUsers = async (req: Request, res: Response,next: NextFunction) => {
    try {
        const allUsers = await userService.getAllUsers()
        res.status(200).json({status: 'success', payload: allUsers})
    } catch (error: any) {
        next(createError(404, error.message))
    }
}

export const getUser = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const allUsers = await userService.getUser(+req.params.id)
        res.status(200).json({status: 'success', payload: allUsers})
    } catch (error: any) {
        next(createError(404, error.message))
    }
}

export const createUser = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await userService.createUser(name, email, password)

        res.status(201).json({ status: "success", payload: newUser });
    } catch (error: any) {
        next(createError(404, error.message));
    }
};
