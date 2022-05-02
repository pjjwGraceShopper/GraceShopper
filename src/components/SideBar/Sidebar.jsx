import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const Sidebar = ({ loginStatus, setCartChange }) => {
useEffect

  return (
    <div className="sidebar-container">
        <div id="sidebar-column">
          <Link to="/"> Home </Link>
      {/* <Link to="../Search"> Search </Link> */}
      {/* <Link to="./profile"> Profile </Link> */}
      <Link to='/my-library'>My Library</Link>
      {/* <Link to='/Lists'>Lists</Link> */}
      <Link to='./cart'> MyCart </Link>
      {!localStorage.getItem("token") ? (
        <>
          <Link to='./login'> Login </Link>
          <Link to='./sign-up'> Sign-Up </Link>
        </>
      ) : (
        <Link to='./login'> Logout </Link>
          {localStorage.getItem("isAdmin") ? (
            <Link to="./admin">Admin</Link>
          ) : null}
      )}
      </div>
    </div>
  );
};

export default Sidebar;


