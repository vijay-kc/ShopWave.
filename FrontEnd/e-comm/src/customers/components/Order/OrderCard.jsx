import React from 'react'
import {Grid} from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
function OrderCard({item}) {
    const navigate=useNavigate();
    const {orderItems ,orderStatus,_id ,createdAt}=item;
    let date=new Date(createdAt)
    let month = date.toLocaleString('en-US', { month: 'short' });
    // console.log("sdd-----------",month);
    return (
        <div onClick={()=>navigate(`/account/order/${_id}`)} className='p-5 shadow-md hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src={orderItems[0].product?.imageUrl[0]} alt="" />
                       
                        <div className='ml-5 space-y-2'>
                            <p className='font-semibold'>{orderItems[0].product?.title}</p>
                            <p className='opacity-50 text-xs font-semibold text-left'>Size : {orderItems[0].size}</p>
                            <p className='opacity-50 text-xs font-semibold text-left'>Color : {orderItems[0].product?.color}</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹{orderItems[0].discountedPrice}.00</p>
                </Grid>
                <Grid item xs={2}>
                   { orderStatus === "DELIVERED" && <div>
                    <p>
                        <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                        <span>
                            Delivered On {date.getDate()}{month}
                        </span>
                    </p>
                    <p className='text-sm'>
                      Your Item Has Been Delivered  
                    </p>
                   </div> }
                    { orderStatus !== "DELIVERED"&& <p>
                        <span>
                          Expected Delivery On {date.getDate()} {month}
                        </span>
                    </p>}
                </Grid>
            </Grid>
            {orderItems.length>1 &&<Grid>
                <p className='text-sm font-medium pt-2 text-left text-blue-500'>{orderItems.length-1}+ Items</p>
            </Grid>}
        </div>
    )
}

export default OrderCard