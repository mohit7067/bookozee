import axios from "axios";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
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
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={HandleLogin}>
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
            {error.message}
          </span>
        )}
        <button className="loginBtn">
          {loading ? <div class="lds-dual-ring"></div> : "Login"}
        </button>
        <p>
          New to Bookozee please{" "}
          <Link style={{ color: "inherit" }} to="/register">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
