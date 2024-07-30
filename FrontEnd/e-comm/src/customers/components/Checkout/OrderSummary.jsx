import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { createPayment } from '../../../State/Payment/action'
import OrderItemCard from './OrderItemCard'

function OrderSummary() {
    const dispatch = useDispatch();
    const location = useLocation()
    const { orders } = useSelector(store => store)
    const searchParams = new URLSearchParams(location.search)
    const orderId = searchParams.get('order_id')


    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [orderId])

    console.log("address order", orders)

    const handleCheckout = () => {
        dispatch(createPayment(orderId))
    }
    return (
        <div>
            <div className='p-4 shadow-lg rounded-s-md border flex' >
            <h1 className='text-2xl font-bold'>Address :</h1>
                <div className='pl-4  mt-1 text-left'>
                    
                    <p className='font-semibold text-xl '>{orders.order?.shippingAddress?.firstName} {orders.order?.shippingAddress?.lastName}</p>
                    <p>{orders.order?.shippingAddress?.streetAddress}, {orders.order?.shippingAddress?.city}</p>
                    <p>{orders.order?.shippingAddress?.state}, {orders.order?.shippingAddress?.zipCode}</p>
                    <div>
                        <p className='font-semibold'>Phone Number :</p>
                        <p>{orders.order?.shippingAddress?.mobile}</p>
                    </div>
                </div>

            </div>
            <div className='lg:grid  grid-cols-3 relative'>
                <div className='col-span-2 mt-10'>
                    {orders.order?.orderItems?.map((item) => < OrderItemCard item={item} />)}
                </div>

                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
                    <div className='border mt-10'>
                        <p className='uppercase font-bold opacity-60 p-4 text-left'>Price details</p>
                        <hr />
                        <div className='space-y-3 font-semibold px-4'>
                            <div className='flex justify-between pt-3 text-black '>
                                <span>Price</span>
                                <span >₹ {orders.order?.totalPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black '>
                                <span>Discount</span>
                                <span className='text-green-600'>-₹ {orders.order?.totalPrice-orders.order?.totalDiscountedPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black '>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <hr />
                            <div className='flex justify-between pt-2  text-black  font-bold '>
                                <span>Total Amount</span>
                                <span className='text-green-600'>₹ {orders.order?.totalDiscountedPrice}</span>
                            </div>

                            <div className='pb-3'>
                                <Button variant="contained" className='w-full' sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd", mt: "1rem" }} onClick={handleCheckout}>
                                    Checkout
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary