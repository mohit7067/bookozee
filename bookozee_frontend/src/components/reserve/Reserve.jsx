import { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useFetch from "../../hooks/useFetch";
import "./reserve.css";
import { HiOutlineCheck } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

const Reserve = ({ setOpenModal, hotelId, HanldeNavigate }) => {
  const { user } = useContext(AuthContext);
  const [showSuccess, setShowSuccess] = useState(false);

  const [roomNumber, setRoomNumber] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const navigate = useNavigate();
  const alldates = JSON.parse(localStorage.getItem("alldates"));
  const Dates = JSON.parse(localStorage.getItem("Dates"));
  useEffect(() => {
    if (!alldates && !Dates) {
      toast.error("Please choose dates before booking !", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        HanldeNavigate();
      }, 3000);
    }
  }, [alldates, Dates]);

  const HandlePush = (value, num) => {
    setSelectedRooms([...selectedRooms, value]);
    setRoomNumber([...roomNumber, num]);
  };

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const HandlePull = (value, num) => {
    setSelectedRooms(selectedRooms.filter((item) => item !== value));
    setRoomNumber(roomNumber.filter((item) => item !== num));
  };

  const HandleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      const userId = user._id;
      const res = await axios.post("/user/booking", {
        userId,
        hotelId,
        dates: { startDate: Dates.startDate, endDate: Dates.endDate },
        roomNumbers: roomNumber,
      });

      if (res) {
        setShowSuccess(true);
        setOpenModal(false);
        toast.success("Your booking has been successful", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/user/bookings");
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <RxCross2 className="rClose" onClick={() => setOpenModal(false)} />
        <span
          style={{
            fontWeight: "bold",
            fontSize: "15px",
            color: "gray",
          }}
        >
          Select your rooms:
        </span>
        {loading && <p>loading...</p>}
        {data?.map((item) => {
          if (item !== null) {
            return (
              <div
                className="rItem"
                key={`${item?._id}${Math.random() * 1000}`}
              >
                <div className="rItemInfo">
                  <div className="rTitle">{item?.title}</div>
                  <div className="rsubTitle">{item?.subTitle}</div>
                  <div className="rDesc">{item?.desc}</div>
                  <div className="rMax">
                    Max People: <b> {item?.maxPeople}</b>
                  </div>
                  <div className="rPrice">
                    Price: <b>₹{item?.price}</b>{" "}
                  </div>
                </div>
                <div>
                  <span
                    style={{
                      color: "gray",
                    }}
                  >
                    Choose Room Numbers:
                  </span>
                  <div className="rRoomContainer">
                    {item?.roomNumbers.map((roomNumber) => {
                      return (
                        <div className="room" key={roomNumber._id}>
                          <label
                            className={
                              !isAvailable(roomNumber) ? "noAvailable" : ""
                            }
                          >
                            {roomNumber.number}
                          </label>
                          {!selectedRooms.includes(roomNumber._id) && (
                            <HiOutlineCheck
                              onClick={() =>
                                HandlePush(roomNumber._id, roomNumber.number)
                              }
                              className={
                                !isAvailable(roomNumber)
                                  ? "noAvailableChecked"
                                  : "rSelect"
                              }
                            />
                          )}
                          {selectedRooms.includes(roomNumber._id) && (
                            <HiOutlineCheck
                              onClick={() =>
                                HandlePull(roomNumber._id, roomNumber.number)
                              }
                              className={
                                !isAvailable(roomNumber)
                                  ? "noAvailableChecked"
                                  : "rDrop"
                              }
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }
        })}
        <button onClick={HandleClick} className="rButton">
          Reserve Now !
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Reserve;
