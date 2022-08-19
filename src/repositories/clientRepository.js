import db from "../databases/database.js";


async function findClient(name, adress, phone) {
  return db.query(`SELECT * FROM clients WHERE name = $1 AND adress=$2 AND phone = $3 `, [name, adress, phone]);
}

async function createClient(name, adress, phone) {

  return db.query(
    `
      INSERT INTO clients (name, adress, phone) 

      VALUES ($1, $2, $3)`,
    [name, adress, phone]
  );
}

const clientRepository = {
 findClient,
 createClient
};

export default clientRepository;
