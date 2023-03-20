import { useContext } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import "./userbooking.css";

const UserBookings = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch(`/user/booking/${user._id}`);

  console.log(data);
  return (
    <div>
      <Navbar />
      <Header type="list" />
    </div>
  );
};

export default UserBookings;
