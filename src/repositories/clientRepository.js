import db from "../databases/database.js";


async function findClient(name, address, phone) {
  return db.query(`SELECT * FROM clients WHERE name = $1 AND address=$2 AND phone = $3 `, [name, address, phone]);
}

async function createClient(name, address, phone) {

  return db.query(
    `
      INSERT INTO clients (name, address, phone) 

      VALUES ($1, $2, $3)`,
    [name, address, phone]
  );
}


const clientRepository = {
 findClient,
 createClient
};

export default clientRepository;
