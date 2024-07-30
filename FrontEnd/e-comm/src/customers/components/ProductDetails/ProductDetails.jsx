/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useEffect, useState } from "react";

import { Radio, RadioGroup } from "@headlessui/react";
import { Button, Grid, Rating, Box, LinearProgress } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
// import { mens_kurta } from "../../../Data/Mens_kurta";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { addItemToCart } from "../../../State/Cart/Action";
import { Category, Google, Tune } from "@mui/icons-material";


const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const {products}=useSelector(store=>store)

  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState("");
  const navigate=useNavigate();
  const params =useParams();
  const dispatch=useDispatch();

  console.log("cartData put",selectedSize) 
  const handleAddToCart=()=>{
    const data={productId:params.productId,size:selectedSize}
    dispatch(addItemToCart(data))
    navigate("/cart")
  }
  
  useEffect(()=>{
  
dispatch(findProductsById(params.productId))
  },[params.productId])
  console.log(products)

  const handleNav=()=>{
    navigate(-1)
  }

  const [ind,setInd]=useState(0); 
  const handleImage=(index)=>{
    
    setInd(index)
  }
  
    
  
  return (
    <div className="bg-white lg:20px mx-10">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-8 sm:px-6 lg:max-w-7xl lg:px-10"
          >
            <div className="flex items-center">
              <p
                className="mr-2 text-sm font-medium text-gray-900"
              >
                {products.product?.category?.parentCategory?.parentCategory?.name}
              </p>
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
              <p
                className="mr-2 text-sm font-medium text-gray-900"
              >
                {products.product?.category?.parentCategory?.name}
              </p>
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
              <a onClick={handleNav}
                aria-current="page"
                className="font-medium text-gray-900 hover:text-gray-400 cursor-pointer"
              >
                {products.product?.category?.name}
              </a>
            </li>
          </ol>
        </nav>


        {/* for product details */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 pt-10 pl-8">
          {/* Image gallery */}
          <div className="flex flex-col items-center ">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] mt-4">
              <img
                src={products.product?.imageUrl[ind]}
                alt="image"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {products.product?.imageUrl.map((img ,index) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 cursor-pointer" onClick={()=>handleImage(index)} >
                  <img
                    src={img}
                    alt={img}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className=" lg:col-span-1 mr-20 text-left max-w-2xl pt-4  pb-16  lg:max-w-7xl  lg:pb-12 ">
            <div className="lg:col-span-2">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 text-left">
               {products.product?.brand}
              </h1>
              <h1 className="text-md lg:text-lg text-gray-500 pt=1 text-left">
                {" "}
                {products.product?.title}{" "}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-6 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-5 ">
                <p className="font-semibold">₹{products.product?.discountedPrice}</p>
                <p className="opacity-50 line-through font-semibold">₹{products.product?.price}</p>
                <p className="text-green-600 font-semibold">{products.product?.discountPresent}% Off</p>
              </div>

              {/* Reviews */}
              <div className="mt-1">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={3.5} precision={.5} readOnly />
                  <p className="opacity-70 font-medium text-sm">3355 Ratings</p>
                  <p className="ml-3 text-sm font-semibold text-indigo-600 hover:text-indigo-500">232 Reviews</p>
                </div>
              </div>

              <form className="mt-4">
                {/* Colors */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 text-left">Color :</h3>

                  <fieldset aria-label="Choose a color" className="mt-4">
                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="flex items-center space-x-3"
                    >
                      {products.product?.color.map((color) => (
                       <> <Radio
                       key={color.name}
                       value={color}
                       aria-label={color.name}
                       className={({ focus, checked }) =>
                         classNames(
                           color.selectedClass,
                           focus && checked ? "ring ring-offset-1" : "",
                           !focus && checked ? "ring-2" : "",
                           "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                         )
                       }
                     >
                       <span
                         aria-hidden="true"
                         className={classNames(
                           color.class,
                           "h-8 w-8 rounded-full border border-black border-opacity-10"
                         )}
                       />
                     </Radio>
                    </>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                {/* Sizes */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Size :</h3>
                    <a
                      href=""
                      className="text-md mr-4 font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {products.product?.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size.name}
                          disabled={size.quantity>0?false:true}
                          className={({ focus }) =>
                            classNames(
                              size.quantity
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              focus ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-4 text-md font-medium uppercase hover:bg-gray-100 focus:outline-none sm:flex-1 sm:py-5"
                            )
                          }
                        >
                          {({ checked, focus }) => (
                            <>
                              <span>{size.name}</span>
                              {size.quantity ? (
                                <span
                                  className={classNames(
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    focus ? "border" : "border-2",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
                {!selectedSize&&<p className="text-sm mt-2 font-medium opacity-60">First Select Size</p>}
                <Button onClick={handleAddToCart} disabled={selectedSize?false:true} variant="contained" sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd", mt: "1.5rem" }}>
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-4 lg:col-span-2 lg:col-start-1  lg:border-gray-200  lg:pr-2 lg:pt-6 ">
              {/* Description and details */}
              <div className="text-left ">
                {products.product?.description[0] && <h3 className="text-lg mb-2 font-medium">Description : </h3>}

                <div className="space-y-6 ">
                  <p className="text-base  font-serif text-gray-900">
                    {products.product?.description[0]}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                {products.product?.highlights[0] && <h3 className="text-lg font-medium text-gray-900">Highlights : </h3>}

                <div className="mt-2 text-left">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {products.product?.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400 text-base font-serif">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                {products.product?.description[1] && <h2 className="text-lg font-medium text-gray-900">Details :</h2>}

                <div className="mt-2 space-y-6">
                  <p className="text-base font-serif text-gray-600">{products.product?.description[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* for rating and reviews */}
        <section className="mx-10">
          <h2 className="font-semibold text-xl pb-4">Recent Reviews & Rating</h2>
          <div className="pl-2 border-t-2 pt-2">
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <div className="space-y-4 ">
                  {[1, 1, 1,1].map((item) => <ProductReviewCard />)}
                </div>
              </Grid>
              <Grid item xs={12} md={4} >
                <h1 className="text-xl text-left font-semibold pb-2 ">Product Rating</h1>
                <div className="flex items-center">
                  <Rating value={3.5} readOnly precision={.5} />
                  <p className="opacity-60 px-2">3.5 out of 5</p>
                </div>
                <p className="opacity-60 text-left pt-1">232422 Global Rating</p>
                <Box className="mt-4 text-md text-left  space-y-4">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <h4>Excellent</h4>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 1, height: 20 }} variant="determinate" value={60} color="success" />

                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 1, height: 20 }} variant="determinate" value={30} color="primary" />

                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 1, height: 20}} variant="determinate" value={35} color="secondary" />

                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 1, height: 20 }} variant="determinate" value={25} color="warning" />

                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 1, height: 20 }} variant="determinate" value={50} color="error" />

                    </Grid>
                  </Grid>

                </Box>
              </Grid>
            </Grid>
          </div>
        </section>
        {/* for similar product */}
       {products.products?.content &&<section className="mx-7 mt-4">
          <h1 className="py-5 text-xl font-semibold">Similar Product</h1>
          <div className="flex flex-wrap border-t-2 pt-6"> {products.products?.content?.map((item) => <HomeSectionCard product={item}/>)}</div>
        </section>}
      </div>
    </div>
  );
}
