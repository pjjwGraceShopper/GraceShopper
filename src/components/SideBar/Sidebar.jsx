import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//<i class="bi bi-person-video"></i> -- person icon for my profile later
// data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right"

const Sidebar = ({ loginStatus, setCartChange, me}) => {
  useEffect;

  return (
    <div className="sidebar-container">
      <div id="sidebar-column">
       
        <Link to="./cart"><i className="bi bi-minecart-loaded sideIcon"></i></Link>
        <Link to="/"><i className="bi bi-house-door sideIcon"></i> </Link>
        {me.length || me.token ? <Link to="/my-library"><i className="bi bi-door-open-fill sideIcon"></i></Link>: null}
        {!me.length && !me.token ? (
          <>
            <Link to="./login"><i className="bi bi-key sideIcon"></i></Link>
            <Link to="./sign-up"><i className="bi bi-pencil-square sideIcon"></i></Link>
          </>
        ) : (
          <>
          <Link to="./login"><i className="bi bi-person-x-fill sideIcon"></i></Link>
          <Link to="./profile"><i className="bi bi-person-circle sideIcon"></i></Link>
          </>
        )}
        {me.length || me.admin ? (
          <Link to="./admin"><i className="bi bi-person-heart sideIcon"></i></Link>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;

{/* <Link to="../Search"> Search </Link>  */}
{/* <Link to="./profile"> Profile </Link> */}
{/* <Link to='/Lists'>Lists</Link> */}