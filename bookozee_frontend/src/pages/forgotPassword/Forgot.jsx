import axios from "axios";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
// import "./login.css";

const Forgot = () => {
  const [show, setShow] = useState(false);
  const [cpassword, setCPassword] = useState("");
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

  const HandleForgot = async (e) => {
    e.preventDefault();
    if (cpassword !== credentials.password) {
      toast.warn("Password doesn't match !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.put("/auth/forgot-password", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        if (res) {
          toast.success("Your password has been updated successfully !", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } catch (err) {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: "You are not a user of Bookozee please Signup first !",
        });
        document.getElementById("loginForm").reset();
      }
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
      <form className="loginForm" id="loginForm" onSubmit={HandleForgot}>
        <h1>Bookozee.com (Forgot Password)</h1>
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
            onChange={(e) => setCPassword(e.target.value)}
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
        <div className="loginPassCont">
          <input
            type={show ? "text" : "password"}
            className="password"
            onChange={HandleChange}
            placeholder=" confirm password"
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
          {loading ? <div className="lds-dual-ring"></div> : "Save"}
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
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
      <ToastContainer />
    </div>
  );
};

export default Forgot;
