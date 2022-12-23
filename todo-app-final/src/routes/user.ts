import { Request, Response, Router } from "express";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

export default userRouter
