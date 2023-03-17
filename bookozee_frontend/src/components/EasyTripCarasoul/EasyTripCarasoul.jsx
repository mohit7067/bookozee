import React, { useRef, useState } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./EasyTripCarasoul.css";
// import required modules
import { Navigation } from "swiper";

export default function EasyTripSlider({ data }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="EasyTripSlider">
      <Swiper
        onSwiper={setSwiperRef}
        // slidesPerView={6}
        // spaceBetween={-60}
        pagination={{
          type: "fraction",
        }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            width: 640,
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((el) => (
          <SwiperSlide key={el.id} className="checkkro">
            <img className="easytripsliderimg" src={el.img} alt="" />
            <h4 className="easytripslidertext">{el.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
