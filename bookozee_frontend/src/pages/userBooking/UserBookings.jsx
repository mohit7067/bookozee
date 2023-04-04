import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import SearchHotel from "../../components/SearchHotel/SearchHotel";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import "./userbooking.css";
import axios from "axios";

const UserBookings = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data, loading, error, reFetch } = useFetch(
    `/user/booking/${user._id}`
  );
  const HandleCancel = async (id) => {
    try {
      await axios.delete(`/user/booking/remove/${id}`);
      reFetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="BookingContainer">
        {loading ? (
          <p style={{ textAlign: "center" }}>loading...</p>
        ) : (
          data.map((item) => {
            return (
              <SearchHotel
                key={item._id}
                item={item.hotelBooking}
                bookingDetails={item}
                HandleCancel={HandleCancel}
                type="booking"
              />
            );
          })
        )}
        {loading === false && data.length <= 0 && (
          <div>
            <h1>You don't have any booking yet !</h1>
            <button
              style={{
                border: "1px solid #003580",
                padding: "10px",
                borderRadius: "8px",
                color: "#003580",
                textDecoration: "none",
                cursor: "pointer",
                background: "transparent",
              }}
              onClick={() => {
                navigate("/hotels");
              }}
            >
              Checkout hotels nearby you
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBookings;
