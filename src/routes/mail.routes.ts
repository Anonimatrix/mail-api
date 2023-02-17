import { Router } from "express";
import upload from 'multer';
import * as Controller from "../controllers/mail.controller";
import { formatEmailOptions } from "../middlewares/formatter";
import { limitSize } from "../middlewares/limitSize";
import { validateSendFields } from "../validations/send";

const mailRouter = Router();

// POST /api/mail - Send email with files, validation, size limit and format
mailRouter.post("/", upload().any(), validateSendFields, limitSize, formatEmailOptions, Controller.send);

export default mailRouter;