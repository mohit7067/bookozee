import { Link } from "react-router-dom";
import "./searchhotel.css";

const SearchHotel = ({ item }) => {
  return (
    <div className="searchHotel">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdFGmysLvAeuDkI1OVL703pIHV-xKzlhBCg&usqp=CAU"
        alt=""
        className="shImg"
      />
      <div className="shDesc">
        <h1 className="shTitle">{item.name}</h1>
        <span className="shDistance">{item.distance}m from center</span>
        <span className="shTaxiOp">Free airport taxi</span>
        <span className="shSubtitle">Studio with Air conditioning</span>
        <span className="shFeatures">{item.description}</span>
        <span className="shCancelOp">Free cancellation</span>
        <span className="shCancelOpSubtitle">
          You can cancel later, so lock in this great price today !
        </span>
      </div>
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
            <button className="shCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchHotel;
