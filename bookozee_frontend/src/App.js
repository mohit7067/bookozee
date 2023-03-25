import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckAuth from "./components/CheckAuth/CheckAuth";
import Forgot from "./pages/forgotPassword/Forgot";
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
          <Route path="/forgot-password" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
