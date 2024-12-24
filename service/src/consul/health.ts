import type { Request, Response } from "express";

export const HealthChecker = (req: Request, res: Response) => {
  console.log("Checking healthy...");
  res.status(200).send("OK");
};