import { AiFillCar } from "react-icons/ai";
import { FaHotel, FaTaxi } from "react-icons/fa";
import "./mobilenav.css";
import { MdHotel, MdLogin } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { BsBookmarks } from "react-icons/bs";

const MobileNav = ({ setOpen }) => {
  const { user, dispatch } = useContext(AuthContext);

  const HandleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="mbNavContainer">
      <RxCross2
        style={{ color: "white", float: "right", border: "1px solid white" }}
        onClick={() => setOpen(false)}
      />
      <div className="navRoutes">
        <div className="mbNavList">
          {user && (
            <Link
              to="/user/profile"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <div className="mbNavListItem ">
                <CgProfile />
                <span>{user?.username}</span>
              </div>
            </Link>
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
          <Link
            to="/user/bookings"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <div className="mbNavListItem">
              <BsBookmarks />
              <span>Your bookings</span>
            </div>
          </Link>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none" }}
            className="mbNavListItem "
          >
            <MdHotel />
            <span>Stays</span>
          </Link>

          <Link
            to="/hotels"
            style={{ color: "white", textDecoration: "none" }}
            className="mbNavListItem "
          >
            <FaHotel />
            <span>Nearby Hotels</span>
          </Link>

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
