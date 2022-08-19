import { Router } from "express";

import { validateSchema } from "../middlewares/schemaValidator.js";


const clientRouter = Router();

// clientRouter.post("/signup", validateSchema(userSchema), createUser);
// clientRouter.post("/", validateSchema(loginSchema), loginUser);
// clientRouter.get("/users", getAllUsers);

export default clientRouter;
