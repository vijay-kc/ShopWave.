import React from 'react'
import { useNavigate } from 'react-router-dom';


function SingleCard({ heading, product,category }) {
    //   const {title ,brand,imageUrl,discountedPrice,price,discountPresent,color,_id}=product;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/product/id/${product?._id}`)
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smooth scrolling
          });
    }
    const handleNavigate2 = () => {
        navigate(`${category}`)
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smooth scrolling
          });
    }
    return (
        <div className=" bg-white border border-black-100" >
            <h1 className="text-3xl font-bold flex text-gray-800 pt-4 -mb-4 pl-8">{heading}</h1>

            <div className='flex justify-around items-center bg-white  px-12 w-[46rem]  h-[25rem] '  >
                <div className='h-[20rem] w-[15rem]  cursor-pointer' onClick={handleNavigate}>
                    <img className='object-cover border-2 object-top h-full w-full img' src={product?.imageUrl[3]}  alt="" />

                </div>

                <div>
                    <div className='h-[13rem]  w-[16rem]  cursor-pointer' onClick={handleNavigate} >
                        <img className='object-cover object-top h-full w-full img' src={product?.imageUrl[1]}  alt="" />

                    </div>
                    <div className='h-[8rem] mt-6 w-[16rem] cursor-pointer' onClick={handleNavigate}>
                        <img className='object-cover object-top h-full w-full img' src={product?.imageUrl[2]} alt="" />

                    </div>
                </div>

            </div>
            <div className='px-8  bg-white cursor-pointer text'  >
                <p className='text-left text-lg font-medium text-grey-500 hover:text-[#ffa800]' onClick={handleNavigate}>{product?.title}
                </p>
                <div className='grid grid-cols-2 mb-4 hover:text-[#ffa800]' >
                    <div className="flex space-x-5 items-center   text-gray-900 ">
                        <p className="font-semibold">₹{product?.discountedPrice}.00</p>
                        <p className="opacity-50 line-through ">₹{product?.price}.00</p>
                        <p className="text-green-600 ">{product?.discountPresent}% Off</p>
                    </div>
                    <p className='col-start-2 font text-right text-blue-500 hover:text-[#ffa800]' onClick={handleNavigate2}>see more+</p>
                </div>
            </div>
        </div>
    )
}

export default SingleCard;
