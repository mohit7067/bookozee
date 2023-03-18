import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "../mobilenav/MobileNav";
import { BiLogOut } from "react-icons/bi";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [mbnavopen, setMbnavopen] = useState(false);
  const [openmodal, setOpenModal] = useState(false);
  const HandleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar">
      {mbnavopen && <MobileNav setOpen={setMbnavopen} />}
      <div className="navContainer">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <span className="logo">Bookozee.com</span>
        </Link>
        <div className="mobileNav">
          <RxHamburgerMenu
            onClick={() => setMbnavopen(true)}
            style={{ fontSize: "20px", float: "right" }}
          />
        </div>
        {user ? (
          <div className="desktopNavbar">
            <div
              className="navUserProfile"
              onClick={() => setOpenModal(!openmodal)}
              style={{ cursor: "pointer" }}
            >
              <CgProfile />
              <span style={{ marginTop: "-4px" }}>{user.username}</span>
            </div>
            {openmodal && (
              <div className="profileModalContainer">
                <div>
                  <CgProfile />
                  <span>Profile</span>
                </div>
                <div onClick={HandleLogout}>
                  <BiLogOut />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
