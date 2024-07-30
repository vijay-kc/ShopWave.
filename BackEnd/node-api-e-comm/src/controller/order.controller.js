const orderService =require("../services/orderService")

const createOrder=async (req,res)=>{   
    const user=await req.user;
    // console.log("req",user)
    try {
        let createdOrder = await orderService.createOrder(user,req.body);
        res.status(201).send(createdOrder)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const findOrderById=async (req,res)=>{   

    try {
        let order = await orderService.findOrderById(req.params.id);
        console.log("ord",order)

        res.status(201).send(order)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const orderHistory=async (req,res)=>{   
    const user=await req.user;
    console.log("=====",req)
    try {
        let history = await orderService.userOrderHistory(user._id);
        res.status(201).send(history)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


module.exports={
    createOrder,findOrderById,orderHistory
}