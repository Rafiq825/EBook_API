import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { config } from "./config/config";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: config.frontendDomain,
    })
);

app.get("/", (req, res, next) => {
    res.json({ message: "Welcome to elib apis" });
});

export default app;