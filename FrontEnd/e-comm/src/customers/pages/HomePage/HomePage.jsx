import React from 'react';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel.jsx';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel.jsx';
import { mens_kurta } from '../../../Data/Mens_kurta.js';
import AdCarousel from '../../components/HomeSectionCarousel/AdCarousel.jsx';
import DualCard from '../../components/HomeSectionCard/DualCard.jsx';
import SingleCard from '../../components/HomeSectionCard/SingleCard.jsx';
import { shoes_ad } from '../../../Data/shoes_ad.js';
import CustomerCard from '../../components/HomeSectionCard/CustomerCard.jsx';
function HomePage() {
  // console.log("fdd m",men_shoes)
  return (
    <div>
      <HomeCarousel />
      <div className='space-y-4 py-4 flex flex-col justify-center bg-gray-200'>

        <AdCarousel heading={"Men's kurta"} subHeading={"Top sale of this week"} product={mens_kurta}/>

        <DualCard heading={"Shop By Category"}/>

        <AdCarousel heading={"Trending"} subHeading={"Top views in this week"} product={mens_kurta}/>

        <div className='flex space-x-4 px-4'>
          <SingleCard heading={"Category"} product={shoes_ad} category={"/men/accessories/shoes"}/>
          <SingleCard heading={"Category"} product={shoes_ad} category={"/men/accessories/shoes"}/>
        </div>



        <HomeSectionCarousel heading={"Men's kurta"} product={mens_kurta} />

        {/* <HomeSectionCarousel heading={"Men's watch"} product={men_shoes}/> */}

        <AdCarousel heading={"Men's kurta"} subHeading={"Top sale of this week"} product={mens_kurta} />

        <HomeSectionCarousel heading={"Men's shirt"} product={mens_kurta} />
          
         <CustomerCard heading={"Happy Customer"} subHeading={"customers says"}/> 
      </div>
    </div>
  );
}

export default HomePage;
