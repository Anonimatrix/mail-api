import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(422).json({
            msg: errors.array()[0].msg,
            result: null
        })
    }

    return next()
}