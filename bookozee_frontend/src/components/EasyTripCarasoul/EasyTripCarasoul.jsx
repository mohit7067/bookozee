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
import { useNavigate } from "react-router-dom";

export default function EasyTripSlider({ data }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const navigate = useNavigate();
  const HandleNavigate = (city) => {
    navigate(`/hotels`, {
      state: {
        destination: city,
        dates: [
          {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
          },
        ],
        options: {
          adult: 1,
          children: 0,
          room: 1,
        },
      },
    });
  };
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
          <SwiperSlide
            key={el.id}
            className="checkkro"
            onClick={() => HandleNavigate(el.name)}
            style={{ cursor: "pointer" }}
          >
            <img className="easytripsliderimg" src={el.img} alt="" />
            <h4 className="easytripslidertext">{el.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
