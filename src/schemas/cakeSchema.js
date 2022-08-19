import joi from "joi";

const cakeSchema= joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  image:joi.string().required(),
  description:joi.string().required()
});

export default cakeSchema;