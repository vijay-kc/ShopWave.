import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderHistory } from '../../../State/Order/Action'
import { useNavigate } from 'react-router-dom'

const orderStatus = [
    { label: "On The Way", value: "shipped" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },

]
function Order() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { orders } = useSelector(store => store);
    const handleHome=()=>{
        navigate('/')
    }
    const handleAcc=()=>{
        navigate('/profile')
    }
    const handleOrder=()=>{
        navigate('')
    }
    // const handleFilter=()=>{
        // onChange={()=>handleFilter(option.value)}
    // }
    // console.log("sddsdc", orders)
    useEffect(() => {
        dispatch(getOrderHistory())
    }, [])

    return (
        <div className='px: 5 pt-4 lg:px-20'>
            <nav aria-label="Breadcrumb" className='pb-4'>
                <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-8 sm:px-6 lg:max-w-7xl lg:px-10"
                >
                    <div className="flex items-center">
                    <p className="mr-2 text-sm font-medium text-gray-900 hover:text-gray-400 cursor-pointer" onClick={handleHome}>Home</p>
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
                    <p className="mr-2 text-sm font-medium text-gray-900 hover:text-gray-400 cursor-pointer" onClick={handleAcc}>My Account</p>
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
                    <p className="mr-2 text-sm font-medium text-gray-900 hover:text-gray-400 cursor-pointer" onClick={handleOrder}>My Orders</p>
                    </li>
                </ol>
            </nav>
            <Grid container sx={{ justifyContent: "space-between"  }}>
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>

                            <h1 className='font-semibold'>ORDER STATUS</h1>
                            {orderStatus.map((option) => <div className='flex items-center'>
                                <input defaultValue={option.value} type="checkbox" className='m-1 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                                <label htmlFor={option.value}>
                                    {option.label}
                                </label>
                            </div>)}
                        </div>

                    </div>

                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-6'>
                        {orders.orders?.map((item) => <OrderCard item={item} />)}
                    </div>

                </Grid>

            </Grid>
        </div>
    )
}

export default Order