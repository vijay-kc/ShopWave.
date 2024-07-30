const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");
const Product = require("../models/product.model");

// to create cart 
async function createCart(user){
   try{
    const cart=new Cart({user});
    const createdCart =await cart.save();
    return createdCart;
   } catch(error){
    throw new Error(error.message);
   }
}

// find individual cart
async function findUserCart(userId) {
   try {
       // Find the cart for the given user
       let cart = await Cart.findOne({ user: userId });
       if (!cart) {
           throw new Error('Cart Not Found For This User');
       }

       // Find cart items associated with the found cart
       let cartItems = await CartItem.find({ cart: cart._id })
       .populate("product");
      

       // Assign cart items to the cart
       cart.cartItems = cartItems;
       // Initialize totals
       let totalPriceSum = 0;
       let totalDiscountedPriceSum = 0;
       let totalItemSum = 0;
    //    console.log("product get",cart);
       // Calculate the total price, total discounted price, and total items
    //    console.log("loop" , cartItems[0].price)
    
    let i=0;
       cart.cartItems.forEach(() => {
        totalPriceSum += cartItems[i].price ;
        totalDiscountedPriceSum += cartItems[i].discountedPrice ;
        totalItemSum += cartItems[i].quantity;
        i++;
       }

       )
      

       // Assign calculated totals to the cart
       cart.totalPrice = totalPriceSum;
       cart.totalItem = totalItemSum;
       cart.totalDiscountedPrice = totalDiscountedPriceSum;
       cart.discount=totalPriceSum-totalDiscountedPriceSum;
    //    console.log("cart",cart)
       return cart;
   } catch (error) {
       throw new Error(error.message);
   }
}


// add item to individual's cart 
async function addCartItem(userId, req) {

    
    try {
        const cart = await Cart.findOne({ user: userId });
        
        const product = await Product.findById(req.productId);
        const isCartItemPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId });
        console.log("usr0 ",req.productId); 

       if (!isCartItemPresent) {
           const cartItem = new CartItem({
               product: product._id,
               cart: cart._id,
               quantity: 1,
               userId,
               price: product.price,
               size: req.size,
               discountedPrice: product.discountedPrice,
           });

           const createdCartItem = await cartItem.save();
        //    console.log("item0",user)
           cart.cartItems.push(createdCartItem._id); // Assuming cartItems is an array
           await cart.save();
           return cart;
       } else {
           // Handle the case where the item is already in the cart
           return { message: "Item Already In Cart" };
       }
   } catch (error) {
    // console.log("error",error.message)
       throw new Error(error.message);
     
   }
}

module.exports={createCart ,findUserCart,addCartItem}