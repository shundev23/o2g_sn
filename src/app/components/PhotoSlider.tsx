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
        <Image src="/images/0CC731E8-2CDE-40F6-9832-EFC3594176BB_1_105_c.jpeg" alt="Profile" width={300} height={300} className="rounded-xl" />
      </div>
      <div className="px-2 flex justify-center items-center">
        <Image src="/images/2DB60305-9005-4A3C-BE4D-0E2D4570A71B_1_105_c.jpeg" alt="Photo 1" width={300} height={300} className="rounded-xl" />
      </div>
      <div className="px-2 flex justify-center items-center">
        <Image src="/images/73CF6852-2F30-47BE-9580-7CE645AF1100_1_105_c.jpeg" alt="Photo 2" width={300} height={300} className="rounded-xl" />
      </div>
      <div className="px-2 flex justify-center items-center">
        <Image src="/images/213BB269-B831-4C29-8078-BDB3FBCFBCD2_1_105_c.jpeg" alt="Photo 3" width={300} height={300} className="rounded-xl" />
      </div>
    </Slider>
  );
};

export default PhotoSlider;