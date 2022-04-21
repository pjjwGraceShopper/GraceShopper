import React, { useState, useEffect } from "react";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { getAPIHealth } from "../axios-services";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Sidebar from "./Sidebar";
import "../style/App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import MyLibrary from "./MyLibrary";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");

  useEffect(() => {
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
    <div className='app-container'>
      <Sidebar />
      <div className='main_title'>Hello, World!</div>
      <p>API Status: {APIHealth}</p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        {/* sign-up route currently not working */}
        <Route path='/my-library' element={<MyLibrary />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
