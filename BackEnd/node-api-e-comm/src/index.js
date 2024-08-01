const express =require("express");

const cors=require("cors");

const app = express();

app.use(cors());

app.get("/",(req,res)=>{
    return res.status(200).send({massage:"welcome to e-commerce api-node",status:true});
})
const authRouters=require("./routes/auth.route")
app.use("/auth",authRouters);

const userRouters=require("./routes/user.route")
app.use("/api/user",userRouters);

const productRouter=require("./routes/product.routes")
app.use("/api/products",productRouter)

const adminProductRouter=require("./routes/adminProduct.routes")
app.use("/api/admin/products",adminProductRouter)

const cartRouter=require("./routes/cart.routes")
app.use("/api/cart",cartRouter)

const cartItemRouter=require("./routes/cartItem.routes")
app.use("/api/cart_items",cartItemRouter)

const orderRouter=require("./routes/order.routes")
app.use("/api/orders",orderRouter)

const adminOrderRouter=require("./routes/adminOrder.routes.js")
app.use("/api/admin/orders",adminOrderRouter)

const reviewRouter=require("./routes/review.routes")
app.use("/api/reviews",reviewRouter)

const ratingRouter=require("./routes/rating.routes")
app.use("/api/ratings",ratingRouter)

const paymentRouter = require("./routes/payment.routes.js")
app.use("/api/payments", paymentRouter)

module.exports=app;

