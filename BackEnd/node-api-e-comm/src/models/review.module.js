const mongoose =require("mongoose")

const  reviewSchema=new mongoose.Schema({
    review:{
        type:String,
        require:true
    },
    product:{
        type:mongoose.Schema.ObjectId,
        ref:"products",
        required:true,

    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"users",
        required:true,

    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const Review =mongoose.model("reviews",reviewSchema);

module.exports=Review;