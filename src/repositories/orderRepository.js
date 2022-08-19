import dayjs from "dayjs";
import db from "../databases/database.js";


async function createOrder(clientId, cakeId, quantity, totalPrice) {

    const timeStamp = dayjs().format('YYYY-MM-DD')

    console.log(timeStamp)
    return (
        db.query(`
        INSERT INTO orders ("clientId","cakeId",quantity,"totalPrice", "createAt") VALUES ($1, $2, $3, $4, $5)
        `, [clientId, cakeId, quantity, totalPrice, timeStamp])
    )
}

async function findClient(clientId) {
    return (
        db.query(`
        SELECT * FROM clients WHERE id = $1`, [clientId])
    )
}

async function findCake(cakeId) {
    return (
        db.query(`
        SELECT * FROM cakes WHERE id = $1`, [cakeId])
    )
}


async function getOrder() {

    return (
        db.query('SELECT *FROM orders INNER JOIN (SELECT c.id AS cakeid, c.name AS cakename, c.description, c.image, c.price FROM cakes c)cake ON cake.cakeid = orders."cakeId" INNER JOIN (SELECT  id AS "idClient", name, address, phone FROM clients)client ON  orders."clientId" = client."idClient"')
    )
}



async function getOrderbyId(id) {
console.log("ta na parte de repository")
    return (
        db.query('SELECT *FROM orders INNER JOIN (SELECT c.id AS cakeid, c.name AS cakename, c.description, c.image, c.price FROM cakes c)cake ON cake.cakeid = orders."cakeId" INNER JOIN (SELECT  id AS "idClient", name, address, phone FROM clients)client ON  orders."clientId" = client."idClient" WHERE orders.id =$1', [id])
    )
}


async function getOrderbyClient(id) {

    return (
        db.query('SELECT * FROM orders JOIN (SELECT name, id as cakeid FROM cakes)cakes  ON orders."cakeId" = cakes.cakeid WHERE "clientId" =$1', [id])
    )
}

const orderRepositoy = {
    createOrder,
    findClient,
    findCake,
    getOrder,
    getOrderbyClient,
    getOrderbyId
}

export default orderRepositoy;