import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
const NewRoom = ({ inputs, title }) => {
  const [hotelId, setHotelId] = useState(undefined);
  const [roomN, setRoomNumber] = useState(undefined);
  const [info, setInfo] = useState({});
  const { data, loading, error } = useFetch("/hotels");

  const HandleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const HandleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = roomN.split(",").map((room) => ({ number: room }));

    const newRoom = {
      ...info,
      roomNumbers,
    };

    try {
      if (hotelId) {
        const res = axios.post(`/rooms/${hotelId}`, newRoom);
        if (res) {
          document.getElementById("roomForm").reset();
        }
      } else {
        alert("Choose Hotel");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="Roomright">
            <form id="roomForm">
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    name={input.id}
                    onChange={HandleChange}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Room Numbers</label>
                <textarea
                  onChange={(e) => setRoomNumber(e.target.value)}
                  placeholder="give comma between room numbers"
                ></textarea>
              </div>
              <div className="formInput">
                <label>Choose Hotel</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading..."
                    : data &&
                      data?.map((hotel) => (
                        <option value={hotel._id} key={hotel._id}>
                          {hotel.name} / City:{hotel.city}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={HandleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
