import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HomeSectionCard.css'
function HomeSectionCard({product}) {
  const {title, brand,imageUrl}=product;
  
  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate(`/product/id/${product?._id}`)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
}
  return (
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col homeSectionCard items-center bg-white  rounded-lg overflow-hidden w-[14rem] m-3 border border-black-100 h-[18.5rem] '>
        <div className='h-[14rem] w-[10rem]  '>
            <img className='object-cover object-top h-full w-full img' src={product?.imageUrl[0]} alt="" />
        </div>
        <div className='px-4 ' >
            <h3 className=' mt-2 text-lg font-medium text-grey-900 '>{product.brand}</h3>
            <p className='mt-1 text-sm text-grey-500'>{product.title}</p>
        </div>
    </div>
  )
}

export default HomeSectionCard