const userService = require("../services/user.service")
const CartItem =require("../models/cartItem.model")

async function updateCartItem(userId, cartItemId, cartItemData) {
    try {
        // Find the cart item by ID and populate the product details
        const item = await CartItem.findById(cartItemId).populate('product');
        if (!item) {
            throw new Error(`Cart item not found: ${cartItemId}`);
        }

        // Find the user by ID
        const user = await userService.findUserById(userId);
        if (!user) {
            throw new Error(`User not found: ${userId}`);
        }

        // If actual user and current user are the same, they can change the cart item
        if (user._id.toString() === item.userId.toString()) {
            // Update cart item fields
            item.quantity = cartItemData.quantity;

            // Ensure product details are available
            if (!item.product) {
                throw new Error('Product details not found for the cart item');
            }

            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;

            // Save the updated cart item
            const updatedCartItem = await item.save();

            return updatedCartItem;
        } else {
            throw new Error("You can't update this cart item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}


async function removeCartItem(userId, cartItemId) {
    try {
        const cartItem = await CartItem.findById(cartItemId);
        if (!cartItem) {
            throw new Error('Cart item not found');
        }

        // Assuming you have a userService with a findUserById method
        const user = await userService.findUserById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        // If actual user and current user are the same, they can remove the cart item
        if (user._id.toString() === cartItem.userId.toString()) {
            await CartItem.findByIdAndDelete(cartItemId);
            return { message: 'Cart item removed successfully' };
        } else {
            throw new Error("You can't remove another user's item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}



async function findCartItemById(cartItemId) {
  
    try {
        const cartItem = await CartItem.findById(cartItemId);
       
        if (cartItem) {
            return cartItem;
        }
        throw new Error("catItem not found with id ", cartItemId);
    } catch (error) {
        throw new Error(error.message)
    }

}

module.exports = { findCartItemById, removeCartItem, updateCartItem }