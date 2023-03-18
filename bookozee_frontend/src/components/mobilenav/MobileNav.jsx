import { AiFillCar } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";
import "./mobilenav.css";
import {
  MdAttractions,
  MdFlight,
  MdHotel,
  MdLogin,
  MdWorkHistory,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const MobileNav = ({ setOpen }) => {
  const { user, dispatch } = useContext(AuthContext);

  const HandleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="mbNavContainer">
      <RxCross2
        style={{ color: "white", border: "1px solid white" }}
        onClick={() => setOpen(false)}
      />
      <div className="navRoutes">
        <div className="mbNavList">
          {user && (
            <div className="mbNavListItem ">
              <CgProfile />
              <span>{user?.username}</span>
            </div>
          )}
          {!user && (
            <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <div className="mbNavListItem ">
                <MdLogin />
                <span>Register</span>
              </div>
            </Link>
          )}
          {!user && (
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <div className="mbNavListItem ">
                <MdLogin />
                <span>Login</span>
              </div>
            </Link>
          )}
          <div className="mbNavListItem ">
            <MdHotel />
            <span>Stays</span>
          </div>

          <div className="mbNavListItem ">
            <MdFlight />
            <span>Flights</span>
          </div>
          <div className="mbNavListItem ">
            <MdWorkHistory />
            <span>Flight + Hotel</span>
          </div>
          <div className="mbNavListItem ">
            <AiFillCar />
            <span>Car rentals</span>
          </div>
          <div className="mbNavListItem ">
            <MdAttractions />
            <span>Attractions</span>
          </div>

          {user && (
            <div className="mbNavListItem" onClick={HandleLogout}>
              <BiLogOut />
              <span>Logout</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
