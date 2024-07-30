const mongoose =require("mongoose")
const {Schema} =mongoose;


const  orderSchema= new Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"users",
       
    },
    orderItems:[{
        type:mongoose.Schema.ObjectId,
        ref:"orderItems",

    }],
    orderDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    DeliveryDate:{
        type:Date,
    },
    shippingAddress:{
        type:mongoose.Schema.ObjectId,
        ref:"addresses"
    },
    paymentDetails:{
        paymentMethod:{
            type:String ,
        },
        transactionId:{
            type:String,
        },
        paymentStatus:{
            type:String,
            default:"PENDING"
        },
        
    },
    totalPrice:{
        type:Number,
        required:true
    },
    totalDiscountedPrice:{
        type:Number,
        require:true,
    },
    discounts:{
        type:Number,
        require:true,
    },
    orderStatus:{
        type:String,
        require:true,
        default:"PENDING"
    },
    totalItem:{
        type:Number,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },

})

const Order =mongoose.model("orders",orderSchema);

module.exports=Order;