import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//<i class="bi bi-person-video"></i> -- person icon for my profile later
// data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right"

const Sidebar = ({ loginStatus, setCartChange }) => {
  useEffect;

  return (
    <div className="sidebar-container">
      <div id="sidebar-column">
        <Link to="./cart">
        <i class="bi bi-minecart-loaded sideIcon"></i>
        </Link>
        <Link to="/"><i class="bi bi-house-door sideIcon"></i> </Link>
        {/* <Link to="../Search"> Search </Link> */}
        {/* <Link to="./profile"> Profile </Link> */}
        <Link to="/my-library"><i class="bi bi-door-open-fill sideIcon"></i></Link>
        {/* <Link to='/Lists'>Lists</Link> */}

        {!localStorage.getItem("token") ? (
          <>
            <Link to="./login"><i class="bi bi-key sideIcon"></i></Link>
            <Link to="./sign-up"><i class="bi bi-pencil-square sideIcon"></i></Link>
          </>
        ) : (
          <Link to="./login"><i class="bi bi-person-x-fill sideIcon"></i></Link>
        )}
        {localStorage.getItem("isAdmin") ? (
          <Link to="./admin"><i class="bi bi-person-heart sideIcon"></i></Link>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
