import axios from "axios";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const HandleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const HandleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      if (res) {
        navigate("/login", { replace: true });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: "REGISTER_FAILURE",
        payload: " Username or Email already exists please login !",
      });
    }
  };
  const HandleNavigate = () => {
    dispatch({
      type: "REGISTER_FAILURE",
      payload: null,
    });
    navigate("/login");
  };
  return (
    <div className="registerContainer">
      <form className="registerForm" onSubmit={HandleLogin}>
        <h1>Bookozee.com (Sign Up)</h1>
        <input
          type="text"
          required
          placeholder="username"
          onChange={HandleChange}
          className="email"
          id="username"
        />
        <input
          type="email"
          required
          placeholder="email"
          onChange={HandleChange}
          className="email"
          id="email"
        />
        <div className="registerPassCont">
          <input
            type={show ? "text" : "password"}
            onChange={HandleChange}
            placeholder="password"
            id="password"
            required
          />
          <div onClick={() => setShow(!show)}>
            {show ? (
              <AiFillEye className="registerEyeicon" />
            ) : (
              <AiFillEyeInvisible className="registerEyeicon" />
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
        <button className="registerBtn">
          {loading ? <div className="lds-dual-ring"></div> : "Signup"}
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            textAlign: "center",
          }}
        >
          Already have an account !{"  "}
          <p
            style={{
              color: "inherit",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={HandleNavigate}
          >
            Login
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
