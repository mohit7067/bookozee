import "./Header.css";
import "react-toastify/dist/ReactToastify.css";
import { MdHotel } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { ToastContainer, toast } from "react-toastify";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { SearchContext } from "../../context/SearchContext";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const { dispatch } = useContext(SearchContext);

  const [dates, setDates] = useState([
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
    if (
      destination.length === 0 &&
      dates[0].startDate.getDate() === dates[0].endDate.getDate()
    ) {
      toast.warn("Please enter city and select dates !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (destination.length === 0) {
      toast.warn("Please enter city !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (dates[0].startDate.getDate() === dates[0].endDate.getDate()) {
      toast.warn("Please select dates !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch({
        type: "NEW_SEARCH",
        payload: { destination, dates, options },
      });
      const Milliseconds_per_day = 1000 * 60 * 60 * 24;

      function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / Milliseconds_per_day);

        return diffDays;
      }

      const days = dayDifference(dates[0].endDate, dates[0].startDate);

      localStorage.setItem("days", JSON.stringify(days));
      localStorage.setItem("options", JSON.stringify(options));
      const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
          dates.push(new Date(date).getTime());
          date.setDate(date.getDate() + 1);
        }

        return dates;
      };

      const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

      localStorage.setItem("alldates", JSON.stringify(alldates));
      localStorage.setItem(
        "Dates",
        JSON.stringify({
          startDate: dates[0].startDate,
          endDate: dates[0].endDate,
        })
      );
      navigate("/hotels", { state: { destination, dates, options } });
    }
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <Link
            to="/"
            className="headerListItem active"
            style={{ color: "white", textDecoration: "none" }}
          >
            <MdHotel />
            <span>Stays</span>
          </Link>

          <Link
            to="/hotels"
            style={{ color: "white", textDecoration: "none" }}
            className="headerListItem "
          >
            <FaHotel />
            <span>Nearby Hotels</span>
          </Link>
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
                  {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                    dates[0].endDate,
                    "dd/MM/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
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
                    <button
                      className="doneOptions"
                      onClick={() => setopenOptions(false)}
                    >
                      Done
                    </button>
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
      <ToastContainer />
    </div>
  );
};

export default Header;
