import  cakeRepository from "../repositories/cakesRepository.js";

export async function PostCake(req, res) {
  const cake= req.body;

  const { name, price, image, description } = cake
  try {

    await cakeRepository.postCake( name, price, image, description);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}