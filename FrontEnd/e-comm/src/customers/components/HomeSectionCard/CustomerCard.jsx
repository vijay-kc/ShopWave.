import React from 'react'
import ProductReviewCard from '../ProductDetails/ProductReviewCard'

function CustomerCard({heading ,subHeading}) {
  return (
    <div className='bg-white px-24'>
        <h1  className="text-3xl font-bold mt-2 text-gray-800 pt-2 "><span className="">___</span>{heading}<span>___</span></h1>
        <p className=" opacity-65 mb-2"> {subHeading}</p>
   <div className='px-24 py-4' >
    {[1,1,1,1].map(()=><ProductReviewCard />)}
   </div>
    </div>
  )
}

export default CustomerCard