const mongoose =require("mongoose");

const  productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    description:[{
        type:String,
        require:true,
    }],
    highlights:[{
        type:String,
        require:true,
    }],
    price:{
        type:Number,
        required:true,
    },
    discountedPrice:{
        type:Number,
        required:true,
        
    },
    discountPresent:{
        type:Number,
    },
    quantity:{
        type:Number,
        required:true,
        
    },
    brand:{
        type:String,
    },
    color:[{
        type:String,
    }],
    sizes:[{
        name:{type:String},
        quantity:{type:Number}

    }],
    imageUrl:[{
        type:String,
    }],
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings",
        
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews",
        
    }],
    numRatings:{
        type:Number,
        default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    tag:{
        type:String,
        default:"",
    }
    
})

const Product=mongoose.model("products",productSchema);

module.exports=Product;