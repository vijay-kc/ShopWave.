const  mongoose=require("mongoose")
require('dotenv').config();

const connectDb=()=>{
    return mongoose.connect(process.env.DATABASE_URL);
}

module.exports={connectDb}