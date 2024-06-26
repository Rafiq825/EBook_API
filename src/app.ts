import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { config } from "./config/config";
import globalErrorHandler from "./middleware/globalErrorHandler";
import userRouter from "./user/userRoute";
import bookRouter from "./book/bookRouter";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: config.frontendDomain,
    })
);

app.get("/", (req, res, next) => {
    res.json({ message: "Welcome to E_Book Api" });
});


app.use('/api/users', userRouter);
app.use('/api/books', bookRouter)


app.use(globalErrorHandler);



export default app;