import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/Action';
function Cart() {
    const { carts } = useSelector(store => store)
    const { auth } = useSelector(store => store)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCheckout = () => {
        navigate("/checkout?step=2")
    }
    const handleLoginRedirect = () => {
        navigate("/Login")
    }
    // console.log("cart", carts.cart)
    useEffect(() => {
        dispatch(getCart())
    }, [carts.updateCartItem, carts.deleteCartItem])
    return (<>{auth.user ? 
                <> {carts.cart?.cartItems.length !== 0 ? 
                    <div className='lg:grid  grid-cols-3 lg:px-16 relative'>
                        <div className='col-span-2 mt-10'>
                            {carts.cart?.cartItems.map((item) => <CartItem item={item} />)}
                        </div>
                        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
                            <div className='border mt-10'>
                                <p className='uppercase font-bold opacity-60 p-4 text-left'>Price details</p>
                                <hr />
                                <div className='space-y-3 font-semibold px-4'>
                                    <div className='flex justify-between pt-3 text-black '>
                                        <span>Price</span>
                                        <span >₹{carts.cart?.totalPrice}</span>
                                    </div>
                                    <div className='flex justify-between pt-3 text-black '>
                                        <span>Discount</span>
                                        <span className='text-green-600'>-₹{carts.cart?.discount}</span>
                                    </div>
                                    <div className='flex justify-between pt-3 text-black '>
                                        <span>Delivery Charge</span>
                                        <span className='text-green-600'>Free</span>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between pt-2  text-black  font-bold '>
                                        <span>Total Amount</span>
                                        <span className='text-green-600'>₹{carts.cart?.totalDiscountedPrice}</span>
                                    </div>

                                    <div className='pb-3'>
                                        <Button onClick={handleCheckout} variant="contained" disabled={carts.cart?.cartItems.length !== 0 ? false : true} className='w-full' sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd", mt: "1rem" }}>
                                            Order Item
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> 
                : ( <div className='h-[80vh] mt-24 '><h2 className='font-medium font-serif text-xl'>Please add some item to your cart</h2>     
                        <Button
                            variant="contained"
                            color="primary"
                            href='/'
                            sx={{ mt: 2, bgcolor: "#9155fd" }}
                        >
                            Add Item
                        </Button>
                    </div>
                  )}
                </> 
            : ( <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="80vh"
                    p={3}
                >
                    <Typography variant="h4" gutterBottom>
                        Please Log In
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        You need to log in to access cart. Please click the button below to go to the login page.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLoginRedirect}
                        sx={{ mt: 2 }}
                    >
                        Go to Login
                    </Button>
                </Box>
              )}
            </>
    )
}

export default Cart