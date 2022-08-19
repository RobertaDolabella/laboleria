import orderRepositoy from "../repositories/orderRepository.js"

export async function createOrder(req, res) {

    const { clientId, cakeId, quantity, totalPrice } = req.body

    try {

        const { rows: client } = await orderRepositoy.findClient(clientId)

        if (client.length === 0) {
            res.sendStatus(404)
        }


        const { rows: cake } = await orderRepositoy.findCake(cakeId)

        if (cake.length === 0) {
            res.sendStatus(404)
        }

        await orderRepositoy.createOrder(clientId, cakeId, quantity, totalPrice)

        res.send("tudo certo")
    } catch (error) {
        res.send(error.message)
    }
}


export async function getOrder(req, res) {

    const orders = []

    try {
        const { rows: allOrders } = await orderRepositoy.getOrder()
        console.log(allOrders)

        allOrders.map(order => {

            const totalInfo = {
                "client": {
                    id: order.clientId,
                    name: order.name,
                    "address": order.adress,
                    phone: order.phone
                },
                "cake": {
                    "id": order.cakeId,
                    "name": order.cakename,
                    "price": order.price,
                    "description": order.description,
                    "image": order.image
                },

			"orderId": order.id,
            "createdAt": order.createdAt,
            "quantity": order.quantity,
            "totalPrice": order.totalPrice
            }
            orders.push(totalInfo)
        })

        res.send(orders)
    } catch {
        res.send("deu ruim")
    }

}



// const {id}= req.params

// console.log(id)
const order = {
    createOrder,
    getOrder
}

export default order;
