import { Router } from "express";

export const userRouter = new Router();

userRouter.get("/", (req, res) => res.send("hello"));
