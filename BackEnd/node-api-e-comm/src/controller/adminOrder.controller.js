const orderService = require("../services/orderService");

const getAllOrders = async (req, res) => {
   
    try {
        // console.log("res")
        const orders = await orderService.getAllOrders();
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};
const getAllProduct = async (req, res) => {
   
    try {
        // console.log("res")
        const orders = await orderService.getAllProduct();
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const confirmedOrders = async (req, res) => {
    const orderId = req.params.orderId;
    // console.log("id",orderId)
    try {
        const orders = await orderService.confirmOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const shippedOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.shippedOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const deliveredOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deliveredOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const cancelledOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.cancelledOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const deleteOrders = async (req, res) => {
    const orderId = req.params.orderId;
    // console.log("id ",orderId)
    try {
        const orders = await orderService.deleteOrders(orderId);
        console.log("order",orders)
        return res.status(200).send("product deleted successfully");
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};


module.exports={
    deleteOrders,
    cancelledOrders,
    deliveredOrders,
    shippedOrders,
    confirmedOrders,
    getAllOrders
}