import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import CheckAuth from "./components/CheckAuth/CheckAuth";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import List from "./pages/Lists/List";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/register/Register";
import UserBookings from "./pages/userBooking/UserBookings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/hotels"
            element={
              <CheckAuth>
                <List />
              </CheckAuth>
            }
          />
          <Route
            path="/hotel/:id"
            element={
              <CheckAuth>
                <Hotel />
              </CheckAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/user/profile"
            element={
              <CheckAuth>
                <Profile />
              </CheckAuth>
            }
          />
          <Route
            path={`/user/bookings`}
            element={
              <CheckAuth>
                <UserBookings />
              </CheckAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
