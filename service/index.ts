import express from "express";
import { ApiRouter } from "./src/router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ApiRouter);

app.listen(4000, () => {
  const url = `http://localhost:4000`;
  console.log(`Server is listening at ${url}`);
});