import db from "../databases/database.js";

async function postACake() {
  return db.query(`INSERT INTO ".cakes" ("name",price,image,description) VALUES ($1, $2, $3, $4)`, [name, price, image, descriotion])
};

const cakeRepository = {
    postACake
}

export default cakeRepository