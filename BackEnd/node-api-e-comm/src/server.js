const app =require(".");
const { connectDb } = require("./config/db");

const PORT= 5450;
app.listen(PORT,async()=>{
    await connectDb();
    console.log("e-commerce api listing on PORT : ",PORT);
})