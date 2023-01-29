import express from "express";
import { Request, Response } from "express";
import bmi from "./bmi";
import { BmiInput } from "./bmi";
import bodyParser from "body-parser";
import validator from "./validator";
const app = express();

// TODO implement me :)

app.use(bodyParser);
app.use(validator);
app.get("/bmi", (req: Request, res: Response) => {
  const height = Number(req.query.height);
  const weightUnit = Number(req.query.weightUnit);
  const weight = Number(req.query.weight);
  const heightUnit = Number(req.query.heightUnit);
  const Input: BmiInput = { weight, weightUnit, height, heightUnit };
  res.send(bmi(Input));
});

app.post("/bmi", (req: Request, res: Response) => {
  const height = Number(req.body.height);
  const weightUnit = Number(req.body.weightUnit);
  const weight = Number(req.body.weight);
  const heightUnit = Number(req.body.heightUnit);
  const Input: BmiInput = { weight, weightUnit, height, heightUnit };
  res.send(bmi(Input));
});

export default app;
