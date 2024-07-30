import React from 'react'
import { useNavigate } from 'react-router-dom';


function DualCard({heading}) {
//   const { imageUrl} = product;

  const navigate = useNavigate();
  const handleNavigate1 = () => {
    navigate(`/women/clothing/lehenga`)
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smooth scrolling
      });
  }
  const handleNavigate2 = () => {
    navigate(`/women/clothing/saree`)
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smooth scrolling
      });
  }
  return (
    <div className="dual-card bg-white border border-black-100">
        <h1  className="text-3xl font-bold flex text-gray-800 pt-4 -mb-4 pl-8">{heading}</h1>

    <div  className='flex justify-around items-center bg-white  px-20  w-full  h-[25rem] '>
      <div className='h-[18rem] overflow-hidden cursor-pointer w-[40rem] 'onClick={handleNavigate1}>
        <img className='object-cover object-top h-full w-full img' src="https://d6kigqwjl9u8w.cloudfront.net/wysiwyg/09-05-24-8_1.jpg" alt="" />
      </div>

      <div className='h-[18rem] overflow-hidden cursor-pointer w-[40rem]  ' onClick={handleNavigate2}>
        <img className='object-cover object-top h-full w-full img' src="https://d6kigqwjl9u8w.cloudfront.net/wysiwyg/09-05-24-9.jpg" alt="" />
      </div>
    </div>
    </div>
  )
}

export default DualCard;
