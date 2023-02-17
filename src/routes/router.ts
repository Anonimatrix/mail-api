import { Router } from "express";
import mailRouter from "./mail.routes";

const router = Router();

router.use("/mail", mailRouter);

export default router;