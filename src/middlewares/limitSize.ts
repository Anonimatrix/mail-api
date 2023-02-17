import { NextFunction, Request, Response } from "express";
import filesConfig from "../config/files";

export const limitSize = (req: Request, res: Response, next: NextFunction) => {
    const files = req.files as Express.Multer.File[];
    
    for(const file of files) {
        if (file.size > filesConfig.maxSize) {
            return res.status(400).json({ 
                msg: "One file is too large!",
                result: null
            });
        }
    }

    return next();
}