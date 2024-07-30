const app =require(".");
require('dotenv').config();
const { connectDb } = require("./config/db");

const Port= process.env.PORT || 5450;
app.listen(Port,async()=>{
    await connectDb();
    console.log("e-commerce api listing on PORT : ",Port);
})