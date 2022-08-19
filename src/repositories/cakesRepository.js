import db from "../databases/database.js";

async function postCake(name, price, image, description) {
  return db.query(`INSERT INTO cakes ("name",price,image,description) VALUES ($1, $2, $3, $4)`, [name, price, image, description])
};

const cakeRepository = {
  postCake
}

export default cakeRepository