import { Router } from "express";
import clientRouter from "./clientRouter.js";
import cakeRouter from "./cakeRouter.js";
import orderRouter from "./orderRouter.js";

const router = Router();

router.use(clientRouter);
router.use(cakeRouter);
router.use(orderRouter)



export default router;
