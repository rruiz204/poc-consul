import { Router } from "express";
import { Controller } from "./controller";

export const ApiRouter = Router();

ApiRouter.get("/", Controller.index);