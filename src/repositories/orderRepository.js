import dayjs from "dayjs";
import db from "../databases/database.js";


async function createOrder( clientId,cakeId,quantity,totalPrice){

    const timeStamp = dayjs().format('DD-MM-YYYY THH:mm:ss') 

    console.log(timeStamp)
    return(
        db.query(`
        INSERT INTO orders ("clientId","cakeId",quantity,"totalPrice", "creatAt") VALUES ($1, $2, $3, $4, $5)
        `, [clientId,cakeId,quantity,totalPrice, timeStamp])
    )
}

async function findClient(clientId){
    return(
        db.query(`
        SELECT * FROM clients WHERE id = $1`, [clientId])
    )
}

async function findCake(cakeId){
    return(
        db.query(`
        SELECT * FROM cakes WHERE id = $1`, [cakeId])
    )
}


async function getOrder(){

    return(
        db.query(' SELECT *FROM orders INNER JOIN (SELECT c.id AS id, c.name AS cakename, c.description, c.image, c.price FROM cakes c)cake ON cake.id = orders.id INNER JOIN clients ON  clients.id = orders."clientId"')
        )}


        const orderRepositoy = {
            createOrder,
            findClient,
            findCake, 
            getOrder
        }

export default orderRepositoy;

// SELECT * FROM orders INNER JOIN cakes ON cakes.id = orders.id INNER JOIN clients ON clients.id = orders."clientId";