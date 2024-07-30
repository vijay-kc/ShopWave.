const Category = require("../models/category.model")
const Product = require("../models/product.model")



async function createProduct(reqData) {
    // console.log("devevvebebfbeb",req.body)
    let topLevel = await Category.findOne({ name: reqData.topLevelCategory })
    if (!topLevel) {
        topLevel = new Category({
            name: reqData.topLevelCategory,
            level: 1
        })
        // console.log("1",topLevel)
        await topLevel.save()
    }
    let secondLevel = await Category.findOne({
        name: reqData.secondLevelCategory,
        parentCategory: topLevel._id,
        level: 2
    })

    if (!secondLevel) {
        secondLevel = new Category({
            name: reqData.secondLevelCategory,
            parentCategory:topLevel._id,
            level: 2
        })
        // console.log("2",secondLevel)
        await secondLevel.save()
    }

    let thirdLevel = await Category.findOne({
        name: reqData.thirdLevelCategory,
        parentCategory: secondLevel._id,
        level: 3
    })
    if (!thirdLevel) {
        thirdLevel = new Category({
            name: reqData.thirdLevelCategory,
            parentCategory:secondLevel._id,
            level: 3
        })
        await thirdLevel.save()
    }
    
    const product =new Product ({
        title:reqData.title,
        color:reqData.color,
        highlights:reqData.highlights,
        description:reqData.description,
        discountedPrice:reqData.discountedPrice,
        discountPresent:reqData.discountPresent,
        imageUrl:reqData.imageUrl,
        brand:reqData.brand,
        price:reqData.price,
        sizes:reqData.sizes,
        quantity:reqData.quantity,
        category:thirdLevel,
        tag:reqData.tag,
    })
    return await product.save(); 
} 

async function deleteProduct(productId){
    const product =await findProductById(productId)
    // console.log("3",thirdLevel)

    await Product.findByIdAndDelete(productId);
    return "Product deleted successfully"
}

async function updateProduct(productId){
    return await Product.findByIdAndUpdate(productId,reqDate)
}

async function findProductById(id){
    const product =await Product.findById(id)
    //exec is like promise in mongoose 
    .populate({ path: "category", populate: { path: "parentCategory" , populate :{path:"parentCategory"} } })
    // .populate("category").exec();

    if(!product){
        throw new Error("Product not found with id "+ id);
    }
    return product;
}

async function getAllProduct(reqQuery){
    let {category,color,sizes,minPrice,maxPrice,minDiscount ,sort,stock,pageNumber ,pageSize}=reqQuery;
    // console.log("wfrhg8rgyv89y4thfuc9h8gvr",reqQuery)  
    
    pageSize=pageSize||20;
    let query=Product.find().populate("category");
    // console.log("category:",reqQuery)
    
    // category filter
    if(category){
        const existCategory=await Category.findOne({name:category});
        if(existCategory){
            query=query.where("category").equals(existCategory._id);
        }else{
            return {content:[],currentPage:1,totalPages:0}
        }
    }
    //white,blue,red,black
    if(color){
        const colorSet= new Set(color.split(",").map(color=>color.trim().toLowerCase()));
        const colorRegex = colorSet.size>0?new RegExp([...colorSet].join("|"),"i"):null;
        query=query.where("color").regex(colorRegex);
    }
    // size filter
    if(sizes){
        const sizesSet=new Set(sizes);
        query=query.where("sizes.name")in([...sizesSet]);
    }
    // prize filter
    if(minPrice&&maxPrice){
        query=query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    }
    //discount filter
    if(minDiscount){
        query=query.where("discountPresent").gt(minDiscount)
    }
    //stock filter
    if(stock){
        if(stock=="in_stock"){
            query= query.where("quantity").gt(0);
        }
        if(stock=="out_of_stock"){
            query=query.where("quantity").lt(1);
        } 
    }
    // sort filter
    if(sort){
        // console.log("fnv9erhgv9cw",sort)
        const sortDirection =sort[0]==="price_high"?-1:1;
        query=query.sort({discountedPrice:sortDirection});
    }
    // for pagination
    const totalProducts =await Product.countDocuments(query);
    const skip=(pageNumber-1)*pageSize;
    query=query.skip(skip).limit(pageSize);

    const products =await query.exec();
    const totalPages=Math.ceil(totalProducts/pageSize);

    return {content:products,currentPage:pageNumber,totalPages}
}

async function createMultipleProduct(products){
    for(let product of products){
        await createProduct(product);
    }
}

module.exports={createProduct,deleteProduct,updateProduct,findProductById,getAllProduct,createMultipleProduct}
