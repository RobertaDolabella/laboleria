import { Router } from "express";

import { PostCake } from "../controllers/cakeControler.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import cakeSchema from "../schemas/cakeSchema.js";

const cakeRouter = Router();

cakeRouter.post("/cakes", validateSchema(cakeSchema), PostCake);
// usersRouter.post("/", validateSchema(loginSchema), loginUser);
// usersRouter.get("/users", getAllUsers);

export default cakeRouter;
