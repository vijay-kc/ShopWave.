import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import { HomeCarouselData } from './HomeCarouselData'

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];

const HomeCarousel = () => {
    const items = HomeCarouselData.map((item) => <img className='cousor-pointer ' role='presentation' src={item.image} alt=" " />)
    return (
        <div className='z-1'>
            <AliceCarousel
                mouseTracking
                items={items}
                // responsive={responsive}
                // controlsStrategy="alternate"
                autoPlay={true}
                autoPlayInterval={1000}
                infinite
                disableButtonsControls
                      
    />
        </div>
    )
};

export default HomeCarousel