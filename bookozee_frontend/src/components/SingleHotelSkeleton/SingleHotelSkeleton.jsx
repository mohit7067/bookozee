import "./singleHotelskeleton.css";

const SingleHotelSkeleton = () => {
  return (
    <div className="shsContainer">
      <div className="shsname"></div>
      <div className="shsaddress"></div>
      <div className="shsdistance"></div>
      <div className="shsprice"></div>
      <div className="shsImageCotainer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="shsFooterContainer">
        <div className="shsleftContent">
          <div className="shsleftFheading"></div>
          <div className="shsleftFsubheading"></div>
        </div>
        <div className="shsrightContent"></div>
      </div>
    </div>
  );
};

export default SingleHotelSkeleton;
