const cartService = require("../services/cart.service");
const Address = require("../models/address.model");
const Order = require("../models/order.model");
const OrderItem = require("../models/orderItem.model");

async function createOrder(user, shippingAddress) {
  let address;
  if (shippingAddress._id) {
    let existAddress = await Address.findById(shippingAddress._id);
    address = existAddress;
  } else {
    address = new Address(shippingAddress);
    address.user = user._id;
    await address.save();
    if(shippingAddress.save === 'on'){
      user.address.push(address);
      await user.save();
    }
    
  }
  const cart = await cartService.findUserCart(user._id);
  const orderItems = [];
  for (const item of cart.cartItems) {
    const orderItem = new OrderItem({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });
    
    const createOrderItem = await orderItem.save();
    orderItems.push(createOrderItem);
    console.log("sfdbdb ",cart);
  }
  const createdOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItem: cart.totalItem,
    shippingAddress: address,
  });
  const savedOrder = await createdOrder.save();
  console.log("order",savedOrder );
  
  return savedOrder;
}

async function placeOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";

  return await order.save();
}

async function confirmOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CONFIRMED";

  return await order.save();
}

async function shippedOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "SHIPPED";

  return await order.save();
}

async function deliveredOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "DELIVERED";

  return await order.save();
}

async function cancelledOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CANCELLED";

  return await order.save();
}

async function findOrderById(orderId) {
  console.log("get id", orderId);
  try {
    const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");
    if(!order){
        throw new Error("Order not found");
    }
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
  
    // if (!order) {
    //     console.log("Order not found");
    //   } else {
    //     console.log("Order found:", order);
    //     if (!order.user) {
    //       console.log("User not populated");
    //     }
    //     if (!order.orderItems || !order.orderItems.length) {
    //       console.log("OrderItems not populated");
    //     } else {
    //       order.orderItems.forEach((item, index) => {
    //         if (!item.product) {
    //           console.log(`Product not populated for item ${index}`);
    //         }
    //       });
    //     }
    //     if (!order.shippingAddress) {
    //       console.log("ShippingAddress not populated");
    //     } else if (!order.shippingAddress.address) {
    //       console.log("Address not populated");
    //     }
    //   }

  
}

async function userOrderHistory(userId ) {
  try {
    const orders = await Order.find({ user: userId  })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrders() {
  // console.log("res s");
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
  // lean load faster than usual
}

async function deleteOrders(orderId) {
    const order = await findOrderById(orderId);
    // console.log("sev id",order)
  await Order.findByIdAndDelete(order._id);
}

module.exports = {
  deleteOrders,
  getAllOrders,
  userOrderHistory,
  findOrderById,
  cancelledOrder,
  deliveredOrder,
  createOrder,
  confirmOrder,
  placeOrder,
  shippedOrder,
};
