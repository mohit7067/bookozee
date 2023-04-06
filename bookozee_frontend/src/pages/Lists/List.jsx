import "./list.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchHotel from "../../components/SearchHotel/SearchHotel";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { SearchContext } from "../../context/SearchContext";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState("");
  const [opendate, setOpenDate] = useState(false);

  const [dates, setDates] = useState(
    location.state
      ? location?.state.dates
      : [
          {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
          },
        ]
  );
  const [options, setOptions] = useState(
    location.state
      ? location.state.options
      : {
          adult: 1,
          children: 0,
          room: 1,
        }
  );

  useEffect(() => {
    const GetLocation = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "https://ipapi.co/json",
          withCredentials: false,
        });
        if (location.state) {
          setDestination(location.state.destination);
        } else {
          setDestination(res.data.city);
        }
      } catch (error) {
        console.log(error);
      }
    };
    GetLocation();
  }, [location.state]);

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999999}`
  );
  const { dispatch } = useContext(SearchContext);
  const HandleClick = () => {
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
      reFetch();
      setOpenDate(false);
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                type="text"
                placeholder={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label>Check-in-Date to Check-out-Date</label>
              <span onClick={() => setOpenDate(!opendate)}>
                {" "}
                {`${format(dates[0]?.startDate, "dd/MM/yyyy")} to ${format(
                  dates[0]?.endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {opendate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  ranges={dates}
                  minDate={new Date()}
                  className="dateRangerList"
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOption">
                <div className="lsOptionItem">
                  <span className="lsOptionPrice">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder="0"
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionPrice">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={0}
                    placeholder="0"
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionPrice">Adults </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={1}
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionPrice">Children </span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionPrice">Room </span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={HandleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              <div style={{ textAlign: "center" }}>loading...</div>
            ) : (
              <>
                {data.length > 0 ? (
                  data?.map((item) => {
                    return <SearchHotel item={item} key={item._id} />;
                  })
                ) : (
                  <div>
                    <div className="noHotelContainer">
                      <img
                        src={
                          "http://atlas-content-cdn.pixelsquid.com/stock-images/cartoon-hotel-Av5P0G6-600.jpg"
                        }
                        alt=""
                      />
                      <h1>Currently No Hotel Available At {destination} !</h1>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default List;
