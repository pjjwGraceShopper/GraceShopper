import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//----------------------------------------------------------------
//<i class="bi bi-person-video"></i> -- Search Icon maybe?
// data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right"
//------------------------------------------------
const Sidebar = ({ loginStatus, setCartChange, me}) => {
  useEffect;
//------------------------------------------------
  return (
    <div className="sidebar-container">
      <div id="sidebar-column">
        <Link to="./cart"><i className="bi bi-minecart-loaded sideIcon" data-bs-toggle="tooltip" data-bs-placement="right" title="My Cart"></i></Link>
        <Link to="/"><i className="bi bi-house-door sideIcon" data-bs-toggle="tooltip" data-bs-placement="right" title="Home"></i> </Link>
        {me.length || me.token ? <Link to="/my-library"><i className="bi bi-door-open-fill sideIcon" data-bs-toggle="tooltip" data-bs-placement="right" title="My Library"></i></Link>: null}
        {!me.length && !me.token ? (
          <>
            <Link to="./login"><i className="bi bi-key sideIcon"data-bs-toggle="tooltip" data-bs-placement="right" title="Login"></i></Link>
            <Link to="./sign-up"><i className="bi bi-pencil-square sideIcon"data-bs-toggle="tooltip" data-bs-placement="right" title="Sign Up"></i></Link>
          </>
        ) : (
          <>
          <Link to="./login"><i className="bi bi-person-x-fill sideIcon"data-bs-toggle="tooltip" data-bs-placement="right" title="Logout"></i></Link>
          <Link to="./profile"><i className="bi bi-person-circle sideIcon"data-bs-toggle="tooltip" data-bs-placement="right" title="My Profile"></i></Link>
          </>
        )}
        {me.length || me.admin ? (
          <Link to="./admin"><i className="bi bi-person-heart sideIcon"data-bs-toggle="tooltip" data-bs-placement="right" title="Admin Tools"></i></Link>
        ) : null}
      </div>
    </div>
  );
};
//----------------------------------------------------------------
export default Sidebar;

{/* <Link to="../Search"> Search </Link>  */}
