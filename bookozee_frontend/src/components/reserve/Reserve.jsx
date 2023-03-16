import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useFetch from "../../hooks/useFetch";
import "./reserve.css";
import { HiOutlineCheck } from "react-icons/hi";

const Reserve = ({ setOpenModal, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);

  const alldates = JSON.parse(localStorage.getItem("alldates"));
  const HandlePush = (value) => {
    setSelectedRooms([...selectedRooms, value]);
  };

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const HandlePull = (value) => {
    setSelectedRooms(selectedRooms.filter((item) => item !== value));
  };

  const HandleClick = () => {};

  return (
    <div className="reserve">
      <div className="rContainer">
        <RxCross2 className="rClose" onClick={() => setOpenModal(false)} />
        <span style={{ fontWeight: "bold", fontSize: "15px", color: "gray" }}>
          Select your rooms:
        </span>
        {data?.map((item) => {
          return (
            <div className="rItem" key={`${item?._id}${Math.random() * 1000}`}>
              <div className="rItemInfo">
                <div className="rTitle">{item?.title}</div>
                <div className="rDesc">{item?.desc}</div>
                <div className="rMax">{item?.desc}</div>
                <div className="rTitle">
                  Max People: <b> {item?.maxPeople}</b>
                </div>
                <div className="rPrice">
                  Price: <b>₹{item?.price}</b>{" "}
                </div>
              </div>
              <div>
                <span style={{ color: "gray" }}>Choose Room Numbers:</span>
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
                            onClick={() => HandlePush(roomNumber._id)}
                            className="rSelect"
                            disabled={!isAvailable(roomNumber)}
                          />
                        )}
                        {selectedRooms.includes(roomNumber._id) && (
                          <RxCross2
                            onClick={() => HandlePull(roomNumber._id)}
                            className="rDrop"
                            disabled={!isAvailable(roomNumber)}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
        <button onClick={HandleClick} className="rButton">
          Reserve Now !
        </button>
      </div>
    </div>
  );
};

export default Reserve;
