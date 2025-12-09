import React, { useEffect, useState } from "react";
import heroImg from "../../assets/hero.jpg";
import hero2Img from "../../assets/hero2.jpg";
import hero3Img from "../../assets/hero3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Grow & Sell Your Crops Easily",
      img: heroImg,
    },
    {
      id: 2,
      title: "Connect Farmers & Buyers",
      img: hero2Img,
    },
    {
      id: 3,
      title: "Your Digital Agricultural Marketplace",
      img: hero3Img,
    },
  ];

  return (
    <div className="w-full h-full relative z-0">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500 }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[600px] w-full bg-cover bg-center flex justify-center items-center  text-white text-3xl font-bold object-cover"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="text-7xl  mr-40 w-[900px] p-5 rounded">
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
