import { useState } from "react";
import { Link } from "react-router-dom";
import "./searchhotel.css";

const SearchHotel = ({ item, bookingDetails, type }) => {
  const startDate =
    type === "booking" && bookingDetails.dates.startDate.split("T")[0];
  const endDate =
    type === "booking" && bookingDetails.dates.endDate.split("T")[0];

  const [check, setCheck] = useState(false);

  console.log(startDate === new Date().toISOString().split("T")[0]);

  console.log(startDate, new Date().toISOString().split("T")[0]);

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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdFGmysLvAeuDkI1OVL703pIHV-xKzlhBCg&usqp=CAU"
          alt=""
          className="shImg"
        />
      </div>
      <div className="shDesc">
        <h1 className="shTitle">{item.name}</h1>
        <span className="shCity">
          {item.city}, {item.address}
        </span>
        <span className="shDistance">{item.distance}m from center</span>
        <span className="shTaxiOp">Free airport taxi</span>
        <span className="shSubtitle">Studio with Air conditioning</span>
        <span className="shFeatures">{item.description}</span>
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
            <span>{item.rating >= 5 ? "Excellent" : "Good"}</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="shDetailsTexts">
          <span className="shPrice">${item.cheapestPrice}</span>
          <span className="shTaxOp">Includes taxes and fees</span>
          <Link to={`/hotel/${item._id}`}>
            <button className="shCheckButton">
              {type === "booking" ? "Cancel Booking" : "See availability"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchHotel;
