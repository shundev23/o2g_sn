"use client";

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    centerPadding: '0px',
  };

  return (
    <Slider {...settings}>
      <div className="px-2 flex justify-center items-center">
        <Image src="/images/cards/image1.jpeg" alt="Profile" width={300} height={300} className="rounded-xl" />
      </div>
      <div className="px-2 flex justify-center items-center">
        <Image src="/images/cards/image2.jpeg" alt="Photo 1" width={300} height={300} className="rounded-xl" />
      </div>
      <div className="px-2 flex justify-center items-center">
        <Image src="/images/cards/image3.jpeg" alt="Photo 2" width={300} height={300} className="rounded-xl" />
      </div>
      <div className="px-2 flex justify-center items-center">
        <Image src="/images/cards/image4.jpeg" alt="Photo 3" width={300} height={300} className="rounded-xl" />
      </div>
      <div className="px-2 flex justify-center items-center">
        <Image src="/images/cards/image5.jpeg" alt="Photo 3" width={300} height={300} className="rounded-xl" />
      </div>
    </Slider>
  );
};

export default PhotoSlider;