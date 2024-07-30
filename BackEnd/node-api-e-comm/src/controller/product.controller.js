const productService =require("../services/product.service")

const createProduct=async (req,res)=>{   
//    console.log("devevvebebfbeb",req.body)
    try {
        let product = await productService.createProduct(req.body);
        res.status(201).send(product)
        // res.status(201).send({message:"Product created successfully"})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const deleteProduct=async (req,res)=>{   
    const productId =req.params.id;
    try {
        let product = await productService.deleteProduct(productId);
        res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}  

const updateProduct=async (req,res)=>{   
    const productId =req.params.id;
    try {
        let product = await productService.updateProduct(productId,req.body);
        res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const findProductById=async (req,res)=>{   
    const productId =req.params.id;
    try {
        let product = await productService.findProductById(productId);
        res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getAllProduct=async (req,res)=>{   
    // const productId =req.params.id;
    try {
        let products = await productService.getAllProduct(req.query);
        res.status(201).send(products)
    } catch (error) {
        // console.log("adfesgrhtjyjhgfd",req.query) 
        return res.status(500).send({error:error.message})
    }
}

const createMultipleProduct=async (req,res)=>{   
    const productId =req.params.id;
    try {
        let product = await productService.createMultipleProduct(req.body);
        res.status(201).send({message:"Products created successfully"})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
module.exports={
    createProduct,deleteProduct,updateProduct,getAllProduct,createMultipleProduct,findProductById
}