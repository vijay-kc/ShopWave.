const mongoose =require("mongoose")

const  ratingSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"users",
        required:true,

    },
    product:{
        type:mongoose.Schema.ObjectId,
        ref:"products",
        required:true,

    },
    rating:{
        type:Number,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const Rating =mongoose.model("ratings",ratingSchema);

module.exports=Rating;