import { Router } from "express";

const helloRouter = Router();
helloRouter.get("/", (req, res) => res.send("hello"));
export default helloRouter;
