import React from 'react'

function OrderItemCard({item}) {
  return (
    <div className='p-5 shadow-lg border rounded-md mb-6'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'
                >
                    <img className='w-full h-full object-cover object-top'
                        src={item.product?.imageUrl[0]} alt="" />

                </div>
                <div className='ml-5 '>
                    <p className='font-semibold'>{item.product?.title}</p>
                    <p className='opacity-70 text-left'>Size : {item.size} , Color : {item.product?.color}</p>
                    <p className='opacity-70 text-left'>Quantity : {item.quantity} </p>
                    <p className='opacity-70 mt-2 text-left'>Seller : {item.product?.brand}</p>
                    <div className="flex space-x-5 items-center text-lg lg:text-lg text-gray-900 pt-4  ">
                        <p className="font-semibold">₹{item.discountedPrice}</p>
                        <p className="opacity-50 line-through font-semibold">₹{item.price}</p>
                        <p className="text-green-600 font-semibold">{item.product?.discountPresent}% Off</p>
                    </div>
                </div>


            </div>
            
        </div>
  )
}

export default OrderItemCard