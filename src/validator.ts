import type { NextFunction, Request, Response } from "express";

/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.method === "GET") {
    if (
      !req.headers.weight ||
      !req.headers.weightUnit ||
      !req.headers.height ||
      !req.headers.heightUnit
    )
      next(new Error("Not all argumates"));
  } else {
    if (
      !req.body.weight ||
      !req.body.weightUnit ||
      !req.body.height ||
      !req.body.heightUnit
    )
      next(new Error("Not all argumates"));
  }

  next();
}
