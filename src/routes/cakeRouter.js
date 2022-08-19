import { Router } from "express";

import { PostCake } from "../controllers/cakeControler.js";
import { validateCakeSchema } from "../middlewares/schemaCakeValidator.js";
import cakeSchema from "../schemas/cakeSchema.js";

const cakeRouter = Router();

cakeRouter.post("/cakes", validateCakeSchema(cakeSchema), PostCake);
// usersRouter.post("/", validateSchema(loginSchema), loginUser);
// usersRouter.get("/users", getAllUsers);

export default cakeRouter;
