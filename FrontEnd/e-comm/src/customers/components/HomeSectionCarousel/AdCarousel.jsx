import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from "../../../Data/Mens_kurta";
import AdCard from "../HomeSectionCard/AdCard";


function AdCarousel({heading, subHeading,product}) {
    const [activeIndex,setActiveIndex]=useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };
    
    const slidePrev = () =>setActiveIndex(activeIndex - 1)
    const slideNext = () =>setActiveIndex(activeIndex + 1)

    const syncActiveIndex=({item})=>setActiveIndex(item) 

    const items = product?.slice(activeIndex,activeIndex+6).map((item) => <AdCard product={item}/>);
    
   
  return (
    <div className="relative px-5 lg:px-8 bg-white">
            
            <h1  className="text-3xl font-bold mt-2 text-gray-800 pt-2 "><span className="">___</span>{heading}<span>___</span></h1>
            <p className=" opacity-65 mb-2"> {subHeading}</p>
            <div className="relative p-4 ">
                
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== 0 &&<Button variant="contained" 
                onClick={slidePrev}
                className="z-1 bg-white" sx={{
                    position: "absolute",
                    top: "14em",
                    left:"-2rem",
                    transform:"translateX(50%)",
                    rotate:"-90deg",
                    bgcolor:"white",
                    borderRadius: '50%',
                }}
                aria-label="prev" >
                    <KeyboardArrowLeftIcon sx={{

                        rotate:"90deg",
                        color:"black"
                    }}/>
                </Button>}
               {activeIndex !== items.length+5  && <Button variant="contained" 
                onClick={slideNext}
                className="z-1 bg-white" sx={{
                    position: "absolute",
                    top: "8rem",
                    right:"-2rem",
                    transform:"translateX(50%)",
                    rotate:"90deg",
                    bgcolor:"white",
                    borderRadius: '50%',
                }}
                aria-label="next" >
                    <KeyboardArrowLeftIcon sx={{

                        rotate:"90deg",
                        color:"black"
                    }}/>
                </Button>}
            </div>
        </div>
  )
}

export default AdCarousel