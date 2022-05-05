import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
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
  Profile,
  Checkout,
} from "./index";
import * as bootstrap from "bootstrap";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");
  const [me, setMe] = useState({});
  const [cartChange, setCartChange] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const id = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      const admin = localStorage.getItem("admin");
      setMe({
        token: token,
        id: id,
        admin: admin
      });
    }

    // follow this pattern inside your useEffect calls:
    // first, create an async function that will wrap your axios service adapter
    // invoke the adapter, await the response, and set the data
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    };

    // second, after you've defined your getter above
    // invoke it immediately after its declaration, inside the useEffect callback
    getAPIStatus();
  }, []);

  return (
    <div className="app-container">
      <Sidebar loginStatus={loginStatus} setCartChange={setCartChange} me={me}/>
      <div className="main-container">
        {/* <div className="main_title">Hello, World!</div>
        <p>API Status: {APIHealth}</p> */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                currentMovie={currentMovie}
                setCurrentMovie={setCurrentMovie}
                me={me}
                movies={movies}
                setMovies={setMovies}
              />
            }
          />
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
                me={me}
                loginStatus={loginStatus}
                setLoginStatus={setLoginStatus}
              />
            }
          />
          {/* sign-up route currently not working */}
           <Route path="/my-library" element={<MyLibrary me={me} />} /> 
          <Route
            path="/Lists/:id"
            element={
              <Lists
                currentMovie={currentMovie}
                setCurrentMovie={setCurrentMovie}
                me={me}
                setCartChange={setCartChange}
                movies={movies}
                setMovies={setMovies}
              />
            }
          />
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
          <Route
            path="/admin"
            element={<Admin movies={movies} setMovies={setMovies} me={me} />}
          />
          <Route path="/profile" element={<Profile me={me} />} />
          <Route
            path="/Checkout"
            element={
              <Checkout
                me={me}
                cartChange={cartChange}
                setCartChange={setCartChange}
              />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
