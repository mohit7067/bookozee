import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./property.css";
// import required modules
import { Navigation } from "swiper";

export default function Property() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="slider">
      <h2>Browse by property type</h2>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
              alt=""
            />
            <h4>Hotels</h4>
            <p>944,319 hotels</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o="
              alt=""
            />
            <h4>Apartments</h4>
            <p>977,737 apartments</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
              alt=""
            />
            <h4>Resorts</h4>
            <p>18,880 resorts</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o="
              alt=""
            />
            <h4>Villas</h4>
            <p>528,380 villas</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/52979454.jpeg?k=98337a30d1016ebce1cbebb9e24ba4585f535438bc455ff9efcaee27960ac8b2&o="
              alt=""
            />
            <h4>Cabins</h4>
            <p>40,118 cabins</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o="
              alt=""
            />
            <h4>Cottages</h4>
            <p>577,565 cottages</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o="
              alt=""
            />
            <h4>Glamping</h4>
            <p>14,005 Glamping Sites</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o="
              alt=""
            />
            <h4>Serviced Apartments</h4>
            <p>36,357 serviced apartments</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o="
              alt=""
            />
            <h4>Vacation Homes</h4>
            <p>528,380 vacation homes</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o="
              alt=""
            />
            <h4>Guest houses</h4>
            <p>102,281 guest houses</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o="
              alt=""
            />
            <h4>Hostels</h4>
            <p>17,272 hostels</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
