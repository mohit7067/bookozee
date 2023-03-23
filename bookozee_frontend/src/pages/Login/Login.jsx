import axios from "axios";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);
  const HandleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const HandleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      if (res) {
        navigate(location.state ? location.state.from.pathname : "/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: "User not found !" });
      document.getElementById("loginForm").reset();
    }
  };
  const HandleNavigate = () => {
    dispatch({
      type: "REGISTER_FAILURE",
      payload: null,
    });
    navigate("/register");
  };
  return (
    <div className="loginContainer">
      <form className="loginForm" id="loginForm" onSubmit={HandleLogin}>
        <h1>Bookozee.com (Log In)</h1>
        <input
          type="email"
          required
          placeholder="email"
          onChange={HandleChange}
          className="email"
          id="email"
        />
        <div className="loginPassCont">
          <input
            type={show ? "text" : "password"}
            className="password"
            onChange={HandleChange}
            placeholder="password"
            id="password"
            required
          />
          <div onClick={() => setShow(!show)}>
            {show ? (
              <AiFillEye className="loginEyeicon" />
            ) : (
              <AiFillEyeInvisible className="loginEyeicon" />
            )}
          </div>
        </div>
        {error && (
          <span
            style={{ color: "red", textAlign: "right", marginTop: "-10px" }}
          >
            {error}
          </span>
        )}
        <button className="loginBtn">
          {loading ? <div className="lds-dual-ring"></div> : "Login"}
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <p className="lgFprgotsmall">Forgot Password ?</p>
          </div>
          <div style={{}} className="lgFsmall">
            {" "}
            <p> Don't have an account ? </p>
            <p
              style={{
                color: "inherit",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={HandleNavigate}
            >
              Signup
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
