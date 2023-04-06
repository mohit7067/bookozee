import "./SingleHotel.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { MdLocationPin } from "react-icons/md";
const SingleHotel = () => {
  const { hotelId } = useParams();
  const { data, loading, error } = useFetch(`/hotels/find/${hotelId}`);

  return (
    <>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{data?.name}</h1>
          <div className="hotelAddress">
            <MdLocationPin />
            <span>
              {data?.address},{data?.city}
            </span>
          </div>
          <span className="hotelDistance">
            Excellent location - {data?.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${data?.cheapestPrice} at this property and get a
            free airport taxi
          </span>
          <div className="hotelImages">
            {data?.photos?.map((photo, i) => (
              <div key={i} className="hotelImgWrapper">
                <img loading="lazy" src={photo} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelTitle">{data?.title}</h1>
              <p className="hotelDesc">{data?.description}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h2>
                Cheapest Price:
                <b>₹{data?.cheapestPrice}</b>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHotel;
