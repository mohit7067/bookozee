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
import useFetch from "../../hooks/useFetch";

export default function Property() {
  const [swiperRef, setSwiperRef] = useState(null);
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/52979454.jpeg?k=98337a30d1016ebce1cbebb9e24ba4585f535438bc455ff9efcaee27960ac8b2&o=",
    "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
    "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=",
    "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o=",
  ];
  const skeletonArr = new Array(11).fill(0);
  return (
    <div className="slider">
      <h2>Browse by property type</h2>
      {loading ? (
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          spaceBetween={-60}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {skeletonArr.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="sliderskeletoncontainer">
                  <div></div>
                  <h4></h4>
                  <p></p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          spaceBetween={-60}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data &&
            images.map((image, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="sliderimgcontainer">
                    <img src={image} alt="something" />
                    <h4>{data[i]?.type}</h4>
                    <p>
                      {data[i]?.count} {data[i]?.type}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </div>
  );
}
