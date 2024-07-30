import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material'
import { useDispatch } from 'react-redux';
import { removeItemCart, updateItemCart } from '../../../State/Cart/Action';
const CartItem = ({item}) => {
  const dispatch =useDispatch();

  const handleUpdateCartItem=(num)=>{
    console.log("data",item.quantity)
    const data = {data:{quantity:item.quantity+num},cartItemId:item?._id}
    dispatch(updateItemCart(data));
  }
  const handleRemoveCartItem=()=>{
    dispatch(removeItemCart(item._id))
  }
    return (
        <div className='p-5 shadow-lg border rounded-md mb-6'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'
                >
                    <img className='w-full h-full object-cover object-top'
                        src={item.product?.imageUrl[0]} alt="" />

                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>{item.product?.title}</p>
                    <p className='opacity-70 text-left'>Size : {item.size} , {item.product?.color}</p>
                    <p className='opacity-70 mt-2 text-left'>Seller : {item.product?.brand}</p>
                    <div className="flex space-x-5 items-center text-lg lg:text-lg text-gray-900 pt-6  ">
                        <p className="font-semibold">₹{item.discountedPrice}</p>
                        <p className="opacity-50 line-through font-semibold">₹{item.price}</p>
                        <p className="text-green-600 font-semibold">{item.product?.discountPresent}% Off</p>
                    </div>
                </div>


            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 rounded-sm border'>{item.quantity}</span>
                        <IconButton onClick={()=>handleUpdateCartItem(1)}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                    
                    <div>
                    <Button onClick={handleRemoveCartItem}>Remove</Button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default CartItem