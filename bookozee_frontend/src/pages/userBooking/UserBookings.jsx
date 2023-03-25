import { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import SearchHotel from "../../components/SearchHotel/SearchHotel";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import "./userbooking.css";

const UserBookings = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch(`/user/booking/${user._id}`);

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
                type="booking"
              />
            );
          })
        )}
        {loading === false && data.length <= 0 && (
          <div>
            <h1>You don't have any booking yet !</h1>
            <Link
              style={{
                border: "1px solid #003580",
                padding: "10px",
                borderRadius: "8px",
                color: "#003580",
                textDecoration: "none",
              }}
              to="/hotels"
            >
              Checkout hotels nearby you
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBookings;
