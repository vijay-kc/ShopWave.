const razorpay=require("../config/RazorpayClient")
const orderService=require("../services/orderService")


const createPaymentLink =async (orderId)=>{
    try {
        const order = await orderService.findOrderById(orderId);
        const paymentLinkRequest={
            amount:order.totalDiscountedPrice*100,
            currency:"INR",
            customer:{
                name:order.shippingAddress.firstName + " " + order.shippingAddress.lastName,
                email:order.user.email,
                contact:order.shippingAddress.mobile
                
            },
            notify:{
                sms:true,
                email:true
            },
            reminder_enable:true,
            callback_url:`http://localhost:3000/payment/${orderId}`,
            callback_method :'get'
        }
        
        console.log("ser",paymentLinkRequest)
        const paymentLink =await razorpay.paymentLink.create(paymentLinkRequest)
        console.log("order pay",paymentLink)

    const paymentId= paymentLink.id;
    const payment_Link_Url=paymentLink.short_url;

    const resData={
        paymentId,
        payment_Link_Url

    }
    return resData;
  } catch (error) {
    throw new Error(error.message)
  }
}



const updatePaymentInformation= async (reqData)=>{
    const paymentId=reqData.payment_id;
    const  orderId=reqData.order_id;

    try {
        const order =await orderService.findOrderById(orderId);

        const payment =await razorpay.payments.fetch(paymentId);

        if(payment.status== "captured"){
            order.paymentDetails.paymentId==paymentId;
            order.paymentDetails.paymentStatus="COMPLETED";
            order.orderStatus="PLACED";

            await order.save();
        }

        const resData  ={message:"Your order is placed",success:true}
        return resData;
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports={
    createPaymentLink,
    updatePaymentInformation
}