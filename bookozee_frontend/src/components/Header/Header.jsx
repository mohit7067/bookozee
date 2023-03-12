import "./Header.css";
import { MdHotel } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { MdAttractions } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setopenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleopen = () => {
    setOpenDate(!openDate);
    setopenOptions(false);
  };

  const handleoptionsopen = () => {
    setopenOptions(!openOptions);
    setOpenDate(false);
  };

  const navigate = useNavigate();
  const HandleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <MdHotel />
            <span>Stays</span>
          </div>
          <div className="headerListItem ">
            <MdFlight />
            <span>Flights</span>
          </div>
          <div className="headerListItem ">
            <MdWorkHistory />
            <span>Flight + Hotel</span>
          </div>
          <div className="headerListItem ">
            <AiFillCar />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem ">
            <MdAttractions />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FaTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            {" "}
            <div className="headerText">
              <h1 className="headerTitle">Find your next stay</h1>
              <p className="headerDesc">
                Search deals on hotels, homes, and much more...
              </p>
            </div>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <MdHotel className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FaCalendarAlt className="headerIcon" />
                <span onClick={handleopen} className="headerSearchText">
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <BsFillPersonFill className="headerIcon" />
                <span
                  onClick={handleoptionsopen}
                  className="headerSearchText"
                >{`${options.adult} adults • ${options.children} children • ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adults</span>
                      <div className="optionCounter">
                        <button
                          className={
                            options.adult <= 1
                              ? "optionCounterdisableButton"
                              : "optionCounterButton"
                          }
                          disabled={options.adult <= 1}
                          onClick={() => handleOptions("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOptions("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          className={
                            options.children <= 0
                              ? "optionCounterdisableButton"
                              : "optionCounterButton"
                          }
                          disabled={options.children <= 0}
                          onClick={() => handleOptions("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOptions("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          className={
                            options.room <= 1
                              ? "optionCounterdisableButton"
                              : "optionCounterButton"
                          }
                          disabled={options.room <= 1}
                          onClick={() => handleOptions("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOptions("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerSearchbtn" onClick={HandleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
