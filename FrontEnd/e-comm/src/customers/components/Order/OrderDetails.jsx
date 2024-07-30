import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { deepPurple } from '@mui/material/colors'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useNavigate, useParams } from 'react-router-dom'

function OrderDetails() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const params =useParams();

    const {orders}=useSelector(store=>store);
    useEffect(()=>{
     dispatch(getOrderById(params.orderId))
    },[params.orderId,params])

    let step=0;
    if(orders.order?.orderStatus === "DELIVERED"){
        step=3;
    }
    else if(orders.order?.orderStatus === "SHIPPED"){
        step=2;
    }
    else if(orders.order?.orderStatus === "CONFIRMED"){
         step=1;
    }
            
    const handleHome=()=>{
        navigate('/')
    }
    const handleAcc=()=>{
        navigate('/profile')
    }
    const handleOrder=()=>{
        navigate('')
    }
    console.log("----------",orders)
    return (
        <div className='px-5  lg:px-20'>
             <nav aria-label="Breadcrumb" className='pt-4 pb-4'>
                <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-8 sm:px-6 lg:max-w-7xl lg:px-10"
                >
                    <div className="flex items-center">
                    <p className="mr-2 text-sm font-medium text-gray-600 hover:text-gray-400 cursor-pointer" onClick={handleHome}>Home</p>
                        <svg
                            width={16}
                            height={20}
                            viewBox="0 0 16 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-4 text-gray-300"
                        >
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                    </div>
                    <div className="flex items-center">
                    <p className="mr-2 text-sm font-medium text-gray-600 hover:text-gray-400 cursor-pointer" onClick={handleAcc}>My Account</p>
                        <svg
                            width={16}
                            height={20}
                            viewBox="0 0 16 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-4 text-gray-300"
                        >
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                    </div>
                    <li className="text-sm">
                    <p className="mr-2 text-sm font-medium text-gray-600 hover:text-gray-400 cursor-pointer" onClick={handleOrder}>My Order</p>
                    </li>
                </ol>
            </nav>
            <div>
                <AddressCard address={orders.order?.shippingAddress || {}} />
            </div>
            <div className='py-10'>
                <OrderTracker activeStep={step} />
            </div>
            <Grid container className="space-y-5 p-4" >
                {orders.order?.orderItems?.map((item)=> <Grid item container className="shadow-xl rounded-md p-5 border " sx
                    ={{ alignItems: 'center', justifyContent: 'space-Between' }}>
                    <Grid item xs={6}>
                        <div className='flex
                        item-center space-x-4'>
                            <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="" />

                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>{item.product.title}</p>
                                <p className='space-x-5 text-xs opacity-50 font-semibold text-left'><span>Color : {item.product.color}</span><span>Size : {item.size}</span></p>
                                {/* <p className='text-left text-sm'>Seller : {}</p> */}
                                <p className='text-left text-sm'>₹{item.discountedPrice}</p>

                            </div>
                        </div>

                    </Grid>
                    <Grid item >
                        <Box sx={{ color: "#673ab7" }} >
                            <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2' />
                            <span >Rate & Review Product</span>
                        </Box>

                    </Grid>
                </Grid>)}
               
            </Grid>
        </div>
    )
}

export default OrderDetails