import joi from "joi";

const regexUrl = /(https?:\/\/.*\.(?:png|jpg))/

const cakeSchema= joi.object({
  name: joi.string().min(2).required(),
  price: joi.number().positive().required(),
  image:joi.string().required(),
  description:joi.string().required()
});

export default cakeSchema;
