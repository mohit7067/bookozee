import "./searchhotel.css";

const SearchHotel = () => {
  return (
    <div className="searchHotel">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdFGmysLvAeuDkI1OVL703pIHV-xKzlhBCg&usqp=CAU"
        alt=""
        className="shImg"
      />
      <div className="shDesc">
        <h1 className="shTitle">Tower Street Apartments</h1>
        <span className="shDistance">500m from center</span>
        <span className="shTaxiOp">Free airport taxi</span>
        <span className="shSubtitle">Studio with Air conditioning</span>
        <span className="shFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="shCancelOp">Free cancellation</span>
        <span className="shCancelOpSubtitle">
          You can cancel later, so lock in this great price today !
        </span>
      </div>
      <div className="shDetails">
        <div className="shRatings">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="shDetailsTexts">
          <span className="shPrice">$123</span>
          <span className="shTaxOp">Includes taxes and fees</span>
          <button className="shCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchHotel;
