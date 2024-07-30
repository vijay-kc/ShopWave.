const Rating=require("../models/rating.model")
const productService=require("../services/product.service")

async function createRating(reqData,user){
    const product = await productService.findProductById(reqData.productId);

    const rating=new Rating({
        product:product._id,
        user:user._id,
        product:product._id,
        rating:reqData.rating,
        createdAt:new Date(),
    })
   
    return await rating.save()
}

async function getProductRating(productId){
    return await Rating.find({product:productId})
}

module.exports={createRating,getProductRating}