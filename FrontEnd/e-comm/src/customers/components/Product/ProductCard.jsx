import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

function ProductCard({product}) {
    const {title, brand,imageUrl,price,discountedPrice,color,discountPresent}=product;

    const navigate = useNavigate();
    const handleNavigate=()=>{
        navigate(`/product/id/${product?._id}`)
    }
  return (
    <div onClick={handleNavigate} className='text-sm rounded-lg productCard text-left w-[14rem] m-3 transition-all cursor-pointer' >
        <div className='h-[16rem]'>
            <img className='rounded-t-lg h-full w-full object-cover object-top' src={ product.imageUrl[0]} alt="error" />
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p  className='font-bold opacity-60'>{product.brand}</p>
                <p>{product.title}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>{product.discountedPrice}</p>
                <p className='line-through opacity-50'>{product.price}</p>
                <p className='text-green-600 font-semibold'>{product.discountPresent}%</p>
            </div>
        </div>

    </div>
  )
}

export default ProductCard