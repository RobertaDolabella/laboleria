import orderRepositoy from "../repositories/orderRepository.js"

export async function createOrder(req, res) {

    const { clientId, cakeId, quantity, totalPrice } = req.body

    try {

        const { rows: client } = await orderRepositoy.findClient(clientId)

        if (client.length<1) {
           return res.send("Cliente informado não existe").status(404)
        }


        const { rows: cake } = await orderRepositoy.findCake(cakeId)

        if (cake.length === 0) {
           return res.send("Bolo informado não existe").status(404)
        }

        await orderRepositoy.createOrder(clientId, cakeId, quantity, totalPrice)

        res.sendStatus(201)
    } catch (error) {
        res.send(error.message)
    }
}


export async function getOrder(req, res) {

    const { id } = req.params

    console.log(id)

    const orders = []

    try {
        if(!id){

            const { rows: allOrders } = await orderRepositoy.getOrder()
        console.log(allOrders)

        allOrders.map(order => {

            const totalInfo = [{
                "client": {
                    id: order.clientId,
                    name: order.name,
                    "address": order.address,
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
                "createdAt": order.createAt,
                "quantity": order.quantity,
                "totalPrice": order.totalPrice
            }]
            orders.push(totalInfo)
        })
     }else{
        const { rows: orderById } = await orderRepositoy.getOrderbyId(id)

        orderById.map(order => {

            const totalInfo = {
                "client": {
                    id: order.clientId,
                    name: order.name,
                    "address": order.address,
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
                "createdAt": order.createAt,
                "quantity": order.quantity,
                "totalPrice": order.totalPrice
            }
            orders.push(totalInfo)
        })
     }
        

      return  res.send(orders)
    } catch {
        res.send("deu ruim")
    }

}

export async function getOrdersByclient(req, res) {

    const { id } = req.params

    console.log(id)

    const orderList = []

    try {

        const {rows:client} = await orderRepositoy.findClient(id)


        if (client.length === 0) {
            res.sendStatus(404)
        }

        const { rows: ordersByClient } = await orderRepositoy.getOrderbyClient(id)

        console.log(ordersByClient)

        ordersByClient.map(orders => {

            const order = {
                "orderId": orders.id,
                "quantity": orders.quantity,
                "createdAt": orders.creatAt,
                "totalPrice": orders.totalPrice,
                "cakeName": orders.name
            }
            orderList.push(order)
        })

       return res.send(orderList).status(200)
    } catch (error) {
      return  res.send(error.message)
    }
}


const order = {
    createOrder,
    getOrder, 
    getOrdersByclient
}

export default order;
