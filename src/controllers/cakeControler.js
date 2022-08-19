import  cakeRepository from "../repositories/cakesRepository.js";

export async function PostCake(req, res) {

  const cake= req.body;
   console.log("chegou no validate")
  const { name, price, image, description } = cake
  try {

    await cakeRepository.postCake( name, price, image, description);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(409).send(error.message);
  }
}