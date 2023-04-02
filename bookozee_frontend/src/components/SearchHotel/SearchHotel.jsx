import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import "./searchhotel.css";
import { useState } from "react";

const SearchHotel = ({ item, bookingDetails, type, HandleCancel }) => {
  const [see, setSee] = useState(false);

  const startDate =
    type === "booking" && bookingDetails.dates.startDate.split("T")[0];
  const endDate =
    type === "booking" && bookingDetails.dates.endDate.split("T")[0];

  return (
    <div className={type === "booking" ? "searchHotelub" : "searchHotel"}>
      {type === "booking" &&
        endDate === new Date().toISOString().split("T")[0] && (
          <div className="bookingClosed">
            <h4>This booking has been closed !</h4>
          </div>
        )}
      <div className="shContainer">
        <img
          src={
            item.photos[0] ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdFGmysLvAeuDkI1OVL703pIHV-xKzlhBCg&usqp=CAU"
          }
          alt=""
          className="shImg"
        />
      </div>
      <div className="shDesc">
        <h1 className="shTitle">{item.name}</h1>
        <span className="shCity">
          <MdLocationPin />
          {item.address}, {item.city}
        </span>
        <div className={see ? "shFeaturesSee" : "sehDesciption"}>
          <span className="shFeatures">{item.description}</span>
        </div>
        <span onClick={() => setSee(!see)} className={"see"}>
          {see ? "see less" : "see more"}
        </span>
        <span className="shCancelOp">Free cancellation</span>
        <span className="shCancelOpSubtitle">
          You can cancel later, so lock in this great price today !
        </span>
      </div>
      {type === "booking" && (
        <div className="ubContainer">
          <div>
            <label>Dates:-</label>
            <p>
              {startDate} to {endDate}
            </p>
          </div>
          <div>
            <label>Room Numbers:-</label>
            <div className="roomNumberContainer">
              {bookingDetails?.roomNumbers.map((roomNumber, i) => {
                return <p key={i}>{roomNumber}</p>;
              })}
            </div>
          </div>
        </div>
      )}
      <div className="shDetails">
        {item.rating > 0 && (
          <div className="shRatings">
            <span>{item.rating >= 7.5 ? "Excellent" : "Good"}</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="shDetailsTexts">
          <div className="shPriceDesc">
            <span className="startingFromsh">Starting from</span>
            <span className="shPrice"> ₹{item.cheapestPrice}</span>
          </div>
          <span className="shTaxOp">(Includes taxes and fees)</span>
          {type === "booking" ? (
            <button
              className="shCheckButton"
              onClick={() => HandleCancel(bookingDetails._id)}
            >
              Cancel Booking
            </button>
          ) : (
            <Link to={`/hotel/${item._id}`}>
              <button className="shCheckButton">See availability</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchHotel;
