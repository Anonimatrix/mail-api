import { Request, Response } from "express";
import { sendConfig } from "../config/mailer";
import services from "../config/services";

export const send = async (req: Request, res: Response) => {
    if(req.body.subject.includes(sendConfig.key)) services.mailer.sendMail(req.body);

    res.status(200).json({
        msg: "Email sent!",
        result: null
    });
}