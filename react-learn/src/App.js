import AboutUs from "./components/Pages/AboutUs";
import Header from "./components/NavBar/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import Order from "./components/Pages/Order";
import ErrorNotFound from "./components/ErrorNotFound";
import { background_url } from "./images/types";
import Favorite from "./components/Pages/Favorite";
import { FavContext } from "./components/FavContext";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import React, { Fragment, useState } from "react";
function App() {
  console.log("app rendered");

  const [value, setValue] = useState([]);
  const [isOkey, setIsOkey] = useState(false);
  return (
    <Router>
      <Fragment>
        <FavContext.Provider value={{ value, setValue }}>
          <div
            className="container"
            style={{ backgroundImage: background_url }}
          >
            <Header className="container" />
            <NavBar />

            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/" element={<Home />} />

              <Route path="/favorite" element={<Favorite />} />
              <Route path="/order" element={<Order />} />

              <Route path="/about" element={<AboutUs />} />
              <Route path="/redirect" element={<Navigate to="/home" />} />
              <Route
                path="/checkout"
                element={
                  isOkey ? (
                    <Navigate to="/login" />
                  ) : (
                    <Navigate to="/register" />
                  )
                }
              />
              <Route path="*" element={<ErrorNotFound />} />
            </Routes>
          </div>
        </FavContext.Provider>
      </Fragment>
    </Router>
  );
}

export default App;
