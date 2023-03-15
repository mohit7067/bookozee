import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/Navbar/Navbar";
import SingleHotelSkeleton from "../../components/SingleHotelSkeleton/SingleHotelSkeleton";
import useFetch from "../../hooks/useFetch";
import "./hotel.css";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  // const { dates, options } = useContext(SearchContext);
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const photos = [
    {
      id: "1",
      src: "https://mcdn.wallpapersafari.com/medium/77/81/BgA9vo.jpg",
    },
    {
      id: "2",
      src: "https://cdn.wallpapersafari.com/3/95/qk3Ww1.jpg",
    },
    {
      id: "3",
      src: "https://cdn.wallpapersafari.com/3/95/qk3Ww1.jpg",
    },
    {
      id: "4",
      src: "https://cdn.wallpapersafari.com/3/95/qk3Ww1.jpg",
    },
    {
      id: "5",
      src: "https://cdn.wallpapersafari.com/3/95/qk3Ww1.jpg",
    },
    {
      id: "6",
      src: "https://cdn.wallpapersafari.com/3/95/qk3Ww1.jpg",
    },
  ];

  const days = JSON.parse(localStorage.getItem("days"));
  const options = JSON.parse(localStorage.getItem("options"));

  const HandleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newslideNumber;

    if (direction === "l") {
      newslideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newslideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newslideNumber);
  };
  return (
    <>
      {loading ? (
        <>
          <Navbar />
          <Header type="list" />
          <SingleHotelSkeleton />
        </>
      ) : (
        <div>
          {open && (
            <div className="hotelSlider">
              <RxCrossCircled
                className="hotelCloseIcon"
                onClick={() => setOpen(false)}
              />
              <BsFillArrowLeftCircleFill
                className="hotelSliderArrow"
                onClick={() => handleMove("l")}
              />
              <div className="hotelSliderWrapper">
                <img
                  src={photos[slideNumber].src}
                  alt=""
                  className="hotelSliderImg"
                />
              </div>
              <BsFillArrowRightCircleFill
                className="hotelSliderArrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <Navbar />
          <Header type="list" />
          <div className="hotelContainer">
            <div className="hotelWrapper">
              <button className="booknow">Reserve or Book now !</button>
              <h1 className="hotelTitle">{data?.name}</h1>
              <div className="hotelAddress">
                <MdLocationPin />
                <span>
                  {data?.city} {data?.address}
                </span>
              </div>
              <span className="hotelDistance">
                Excellent location - {data?.distance}m from center
              </span>
              <span className="hotelPriceHighlight">
                Book a stay over ${data?.cheapestPrice} at this property and get
                a free airport taxi
              </span>
              <div className="hotelImages">
                {photos.map((photo, i) => (
                  <div key={photo.id} className="hotelImgWrapper">
                    <img
                      onClick={() => HandleOpen(i)}
                      src={photo.src}
                      alt=""
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailTexts">
                  <h1 className="hotelTitle">{data?.title}</h1>
                  <p className="hotelDesc">{data?.description}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a {days}-night stay!</h1>
                  <span>
                    Located in the real heart of Krakow, this property has an
                    excellent location score of 9.8!
                  </span>
                  <h2>
                    <b>${days * data?.cheapestPrice * options.room}</b> ({days}{" "}
                    nights)
                  </h2>
                  <button>Reserve or Book Now!</button>
                </div>
              </div>
            </div>
            <MailList />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Hotel;
