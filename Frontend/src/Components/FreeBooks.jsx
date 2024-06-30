import React from 'react'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import list from "../../public/list.json"
import Cards from './Cards'

function FreeBooks() {

    const freedata = list.filter(data => data.category === "Free");
    // console.log(freedata);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 xp-4'>
      <div>
      <h1 className='font-semibold text-xl pb-2 text-slate-700'>Free Offered Courses</h1>
      <p className='text-slate-700'>Looking for free digital books? Choose among free epub and Kindle eBooks, download them or read them online.</p>
      </div>

      <div>
      <Slider {...settings}>
        {freedata.map((item) => (
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBooks
