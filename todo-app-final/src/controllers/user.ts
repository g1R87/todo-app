import {Request, Response, } from "express";

export const getUsers = async (req: Request, res: Response) => {
    try {
        res.status(200).json({message: "Hello World!"});
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}
