import "./Header.css";
import { MdHotel } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { MdAttractions } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
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
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FaTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
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
            />
          </div>

          <div className="headerSearchItem">
            <FaCalendarAlt className="headerIcon" />
            <span className="headerSearchText">
              Check-in Date - Check-out Date
            </span>
          </div>
          <div className="headerSearchItem">
            <BsFillPersonFill className="headerIcon" />
            <span className="headerSearchText">2 adults 0 children 1 room</span>
          </div>
          <div className="headerSearchItem">
            <button className="headerSearchbtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
