import "./Profile.css";
import { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
const customId = "custom-id-yes";
const Profile = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState(user?.email);
  const [username, setUsername] = useState(user?.username);
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const HandleUserNameUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`/users/${user?._id}`, { username, email });
      if (res) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        toast.success("Username or Email has been updated", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: customId,
        });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      toast.error("Something went wrong !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const HandlePasswordChange = async (e) => {
    e.preventDefault();
    if (password.length <= 0 && cpassword.length <= 0) {
      toast.error("Please enter password !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (password !== cpassword) {
      toast.error("Password did not match !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setPassword("");
      setCPassword("");
    } else {
      const res = await axios.put(`/users/${user?._id}`, { password });
      if (res) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        toast.success("Password has been changed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  return (
    <>
      <div className="pContainer">
        <Navbar />
        <Header type={"list"} />

        <div className="prWrapper">
          <h2>Profile</h2>
          <div className="prInfo">
            <div className="prInfoTexts">
              <h3>Profile Information</h3>
              <p>
                Update your account's profile information and email address.
              </p>
            </div>
            <div className="prNameupdate">
              <form action="">
                <label>Username</label>
                <br />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label>Email</label>
                <br />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={HandleUserNameUpdate}>Save</button>
              </form>
            </div>
          </div>
          <div className="prInfo">
            <div className="prInfoTexts">
              <h3>Update Password</h3>
              <p>
                Ensure your account is using a long, random password to stay
                secure.
              </p>
            </div>
            <div className="prNameupdate">
              <form action="">
                <br />
                <label>New Password</label>
                <br />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <label>Confirm Password</label>
                <br />
                <input
                  type="password"
                  onChange={(e) => setCPassword(e.target.value)}
                />
                <br />
                <button onClick={HandlePasswordChange}>Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
