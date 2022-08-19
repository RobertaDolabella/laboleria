import { Router } from "express";
import { validateClientSchema } from "../middlewares/schemaClientValidator.js";
import { createClient } from "../controllers/clientController.js";
import clientSchema from "../schemas/clientSchema.js";



const clientRouter = Router();

clientRouter.post("/clients", validateClientSchema(clientSchema), createClient)

export default clientRouter;
