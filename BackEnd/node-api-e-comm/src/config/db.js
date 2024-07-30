const  mongoose=require("mongoose")
const MongodbURL="mongodb+srv://vijay_kc:NVAmgtnsTDmk0j3C@cluster0.yqmhldx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDb=()=>{
    return mongoose.connect(MongodbURL);
}

module.exports={connectDb}