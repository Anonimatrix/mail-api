import { NextFunction, Request, Response } from "express";
import { defaultConfig } from "../config/mailer";

export const formatEmailOptions = (req: Request, res: Response, next: NextFunction) => {
    const { subject, text } = req.body;

    const files = req.files as Express.Multer.File[];
    
    const attachments = files.map((file: any) => ({
        filename: file.originalname,
        content: file.buffer
    }));

    const mailOptions = {
        ...defaultConfig,
        subject: String(subject),
        text: String(text),
        attachments
    };

    req.body = mailOptions;

    next();
}