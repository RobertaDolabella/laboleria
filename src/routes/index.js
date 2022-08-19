import { Router } from "express";
import clientRouter from "./clientRouter.js";
import cakeRouter from "./cakeRouter.js";

const router = Router();

router.use(clientRouter);
router.use(cakeRouter);



export default router;
