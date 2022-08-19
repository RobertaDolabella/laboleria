import joi from "joi";

const orderSchema = joi.object({
  clientId: joi.string().integer(),
  cakeId: joi.string().integer(),
  quantity: joi.integer().required,
  totalPrice: joi.number().required()
});

export default orderSchema;
