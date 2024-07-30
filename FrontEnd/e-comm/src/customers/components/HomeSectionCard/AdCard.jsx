import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AdCard.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
function AdCard({ product }) {
  

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/product/id/${product?._id}`)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
  }
  return (
    <div onClick={handleNavigate} className=' flex flex-col  items-center bg-white  rounded-lg overflow-hidden w-[15rem] mx-3 border border-black-100 h-[24rem] '>
      <div className='h-[19rem] relative  group cursor-pointer w-[15rem] overflow-hidden homeSectionCard'>
        <img className='object-cover object-top h-full w-full img' src={product?.imageUrl} alt="" />

        <div class="absolute bottom-8 left-1/2 txt transform -translate-x-1/2 translate-y-[200%] group-hover:translate-y-1 transition-transform duration-500 ease-in-out  ">
          <div class="bg-white p-2 rounded-lg shadow-md" > <StarBorderIcon /></div>
        </div>
      </div>

      <div class="absolute inset-0 h-[2rem] w-[5rem] flex items-center justify-center">
        <span class="text-white bg-red-600  rounded-full px-1  text-sm text-center">
          New
        </span>
      </div>



      <div className='px-3  bg-white cursor-pointer t-part' >
        <p className='text-left mt-3 text-sm font-medium font-serif text-grey-500'>{product?.title}</p>
        <p className='font-serif mt-2 text-sm text-left' >₹ {product?.price}.00</p>
      </div>
    </div>
  )
}

export default AdCard
// https://www.ethnicplus.in/peach-thread-embroidered-net-party-wear-lehenga-choli

{/* <div class="absolute hid  bottom-20 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-1 transition-transform duration-500 ">
<div class="bg-white p-2 rounded-lg shadow-md"> <StarBorderIcon/></div></div> */}