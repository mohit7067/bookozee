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

export default function TopProperties() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="slider">
      <h2>Stay at our top unique properties</h2>
      <p className="toppropertysubHeading">
        From castles and villas to boats and igloos, we have it all
      </p>
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
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              className="Toppropertyimg"
              src="https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1"
              alt=""
            />
            <h4>La Roulotte de Ciney</h4>
            <p>Belgium, Ciney</p>
            <div className="PropertyRatings">
              <div>8.5</div>
              <p>Very Good</p>
              <p>. 88 reviews</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              className="Toppropertyimg"
              src="https://cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=b984c542b8b1a2ee0e019e4491da338a85b660caa10c5e1197225c5f3052d629&o=&s=1"
              alt=""
            />
            <h4>Wierszyki Shelters</h4>
            <p>Poland, Zakopane</p>
            <div className="PropertyRatings">
              <div>9.7</div>
              <p>Exceptional</p>
              <p>. 88 reviews</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1"
              alt=""
              className="Toppropertyimg"
            />
            <h4>Ranczo w Dolinie</h4>
            <p>Poland, Kiszkowo</p>
            <div className="PropertyRatings">
              <div>9.5</div>
              <p>Exceptional</p>
              <p>. 224 reviews</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1"
              alt=""
              className="Toppropertyimg"
            />
            <h4>Tiny House Dreischwesternherz</h4>
            <p>Germany, Trier</p>
            <div className="PropertyRatings">
              <div>9.6</div>
              <p>Exceptional</p>
              <p>. 135 reviews</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/178421525.webp?k=262301cdcbef1d33942bb02607906eafdee8dde3106ac5732966a206baeebb04&o=&s=1"
              alt=""
              className="Toppropertyimg"
            />
            <h4>Das rote Haus hinterm Deich</h4>
            <p>Germany, Simonsberg</p>
            <div className="PropertyRatings">
              <div>9.3</div>
              <p>Wonderful</p>
              <p>. 48 reviews</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=1887d9e0a796fe553436a57823a481ed3584310d6a940e69cc8db875b110ae66&o=&s=1"
              alt=""
              className="Toppropertyimg"
            />
            <h4>Agriturismo Cabrele</h4>
            <p>Italy, Santorso</p>
            <div className="PropertyRatings">
              <div>9.3</div>
              <p>Wonderful</p>
              <p>. 197 reviews</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/356256733.webp?k=d26e6f029087ccbccf4057b95461d46e7ae18d2aa3dd4247ff6b0a148c10bc33&o=&s=1"
              alt=""
              className="Toppropertyimg"
            />
            <h4>Mini Hotel Übernachten Im Gurkenfass</h4>
            <p>Germany, Lübbenau</p>
            <div className="PropertyRatings">
              <div>8.3</div>
              <p>Very Good</p>
              <p>. 115 reviews</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=ad89bc70ec138736b22947f52b7e0ecbac176026e13c50646147303582d94bcd&o=&s=1"
              alt=""
              className="Toppropertyimg"
            />
            <h4>Carinya Park</h4>
            <p>Australia, Gembrook</p>
            <div className="PropertyRatings">
              <div>9.3</div>
              <p>Wonderful</p>
              <p>. 32 reviews</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderimgcontainer">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/283036728.webp?k=b53dc60651b70813b1a2b12cb3903f54b36f1a04128ab0340ee03b860b0f9c48&o=&s=1"
              alt=""
              className="Toppropertyimg"
            />
            <h4>Gyttja Västergårds</h4>
            <p>Finland, Lillandet</p>
            <div className="PropertyRatings">
              <div>9.3</div>
              <p>Wonderful</p>
              <p>. 307 reviews</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
