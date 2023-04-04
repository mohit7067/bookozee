import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TopProperties.css";
// import required modules
import { Navigation } from "swiper";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

export default function TopProperties() {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=9");
  const [swiperRef, setSwiperRef] = useState(null);
  const navigate = useNavigate();
  const skeletonSliderArr = new Array(9).fill(1);
  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=b984c542b8b1a2ee0e019e4491da338a85b660caa10c5e1197225c5f3052d629&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/178421525.webp?k=262301cdcbef1d33942bb02607906eafdee8dde3106ac5732966a206baeebb04&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=1887d9e0a796fe553436a57823a481ed3584310d6a940e69cc8db875b110ae66&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=ad89bc70ec138736b22947f52b7e0ecbac176026e13c50646147303582d94bcd&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/356256733.webp?k=d26e6f029087ccbccf4057b95461d46e7ae18d2aa3dd4247ff6b0a148c10bc33&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/283036728.webp?k=b53dc60651b70813b1a2b12cb3903f54b36f1a04128ab0340ee03b860b0f9c48&o=&s=1",
  ];

  const HandleNavigate = (id) => {
    navigate(`/hotel/${id}`, { replace: true });
  };

  return (
    <div className="slider">
      <h2>Stay at our top unique properties</h2>
      <p className="toppropertysubHeading">
        From castles and villas to boats and igloos, we have it all
      </p>
      {loading ? (
        <>
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
            {skeletonSliderArr.map((el, i) => {
              return (
                <SwiperSlide key={i}>
                  <div>
                    <div className="sliderskeletonimgcontainer"></div>
                    <div className="sliderskeletontextcontainer"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      ) : (
        <>
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
            {data?.map((el, i) => {
              return (
                <SwiperSlide
                  key={el._id}
                  onClick={() => HandleNavigate(el._id)}
                >
                  {" "}
                  <div className="tpsliderimgcontainer">
                    <img
                      className="tpToppropertyimg"
                      src={el?.photos[0]}
                      alt=""
                    />
                    <h4>{el.name}</h4>
                    <div className="tppricecityCotainer">
                      <p className="tpCity">{el.city}</p>
                      <p className="tpPrice">
                        Starting from ₹{el.cheapestPrice}{" "}
                      </p>
                    </div>

                    {el.rating > 0 && (
                      <div className="tpPropertyRatings">
                        <div>{el.rating}</div>
                        <p>Excellent</p>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
    </div>
  );
}
