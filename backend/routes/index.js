import { Router } from "express";


const indexRouter = Router();

// auth routes
indexRouter.use("/auth", authRouter);


export default indexRouter;
