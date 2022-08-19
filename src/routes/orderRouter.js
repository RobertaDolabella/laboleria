import { Router } from "express";
import {createOrder, getOrder, getOrdersByclient } from "../controllers/orderController.js";
import { validateOrderSchema } from "../middlewares/schemaOrderValidator.js";
import orderSchema from "../schemas/orderSchema.js"

const orderRouter = Router()

orderRouter.post('/order', validateOrderSchema(orderSchema), createOrder)
orderRouter.get('/orders', getOrder)
orderRouter.get('/orders/:id', getOrder)
orderRouter.get('/clients/:id/orders', getOrdersByclient)



export default orderRouter
