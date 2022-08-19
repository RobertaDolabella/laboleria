import { Router } from "express";
import {createOrder, getOrder } from "../controllers/orderController.js";
import { validateOrderSchema } from "../middlewares/schemaOrderValidator.js";
import orderSchema from "../schemas/orderSchema.js"

const orderRouter = Router()

orderRouter.post('/order', validateOrderSchema(orderSchema), createOrder)
orderRouter.get('/order', getOrder)



export default orderRouter
