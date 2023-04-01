import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { hotelInputs, roomInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import CheckAuth from "./components/CheckAuth/CheckAuth";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import SingleHotel from "./pages/SingleHotel/SingleHotel";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <CheckAuth>
                  <Home />
                </CheckAuth>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route
                index
                element={
                  <CheckAuth>
                    <List columns={userColumns} />
                  </CheckAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <CheckAuth>
                    <Single />
                  </CheckAuth>
                }
              />
              <Route
                path="new"
                element={
                  <CheckAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </CheckAuth>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <CheckAuth>
                    <List columns={hotelColumns} />
                  </CheckAuth>
                }
              />
              <Route
                path=":hotelId"
                element={
                  <CheckAuth>
                    <SingleHotel />
                  </CheckAuth>
                }
              />
              <Route
                path="new"
                element={
                  <CheckAuth>
                    <NewHotel inputs={hotelInputs} title="Add New Hotel" />
                  </CheckAuth>
                }
              />
            </Route>
            <Route path="rooms">
              <Route
                index
                element={
                  <CheckAuth>
                    <List columns={roomColumns} />
                  </CheckAuth>
                }
              />
              <Route
                path=":roomId"
                element={
                  <CheckAuth>
                    <Single />
                  </CheckAuth>
                }
              />
              <Route
                path="new"
                element={
                  <CheckAuth>
                    <NewRoom inputs={roomInputs} title="Add New Room" />
                  </CheckAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
