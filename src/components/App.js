import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { getAPIHealth } from "../axios-services";
import "../style/index.css";
import "../style/App.css";
import { Route, Routes } from "react-router-dom";
import {
  Footer,
  Sidebar,
  Login,
  MyLibrary,
  SignUp,
  Home,
  Cart,
  Lists,
  Admin,
} from "./index";
import * as bootstrap from "bootstrap";
//---------------------------------------------------------------
const App = () => {
  //--------------------------------------------------------------
  const [me, setMe] = useState({});
  const [cartChange, setCartChange] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  const [APIHealth, setAPIHealth] = useState("");
  //----------------------------------------------------------------
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const id = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      setMe({
        token: token,
        id: id,
      });
    }

      
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    };

      
    getAPIStatus();
  }, []);
  //-----------------------------------------------------
  return (
    <div className="sidebar-container">
      <Sidebar loginStatus={loginStatus} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                setMe={setMe}
                me={me}
                loginStatus={loginStatus}
                setLoginStatus={setLoginStatus}
              />
            }
          />
          <Route
            path="/sign-up"
            element={
              <SignUp
                setMe={setMe}
                loginStatus={loginStatus}
                setLoginStatus={setLoginStatus}
              />
            }
          />
          <Route path="/my-library" element={<MyLibrary />} />
          <Route path="/Lists" element={<Lists />} />
          <Route
            path="/cart"
            element={
              <Cart
                me={me}
                cartChange={cartChange}
                setCartChange={setCartChange}
              />
            }
          />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
