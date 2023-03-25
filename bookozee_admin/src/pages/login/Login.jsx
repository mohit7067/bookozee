import axios from "axios";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

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
      const res = await axios.post("/auth/admin/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      if (res) {
        navigate("/");
      }
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: err.response.data.message,
      });

      document.getElementById("loginForm").reset();
    }
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" id="loginForm" onSubmit={HandleLogin}>
        <h2>Bookozee Admin (Log In)</h2>
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
      </form>
    </div>
  );
};

export default Login;
