import clientRepository from "../repositories/clientRepository.js";



export async function createClient(req, res) {
  const {name, phone, adress}= req.body;

  try {
    const {rows: existingClient} = await clientRepository.findClient(name,adress, phone);
    console.log(existingClient)
    if (existingClient.length>0) {
      return res.status(409).send("Esse usuário já existe");
    }

    await clientRepository.createClient(name, adress, phone);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
}
const client = {
  createClient
}

export default client