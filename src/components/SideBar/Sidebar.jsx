import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ loginStatus }) => {
useEffect

  return (

    <div id="Sidebar">
      <div id="sidebar-container" >
        <div id="sidebar-column">
      <Link to="/" > Home </Link>

      {/* <Link to="../Search"> Search </Link> */}
      {/* <Link to="./profile"> Profile </Link> */}
      <Link to='/my-library'>My Library</Link>
      <Link to='/Lists'>Lists</Link>
      <Link to='./cart'> MyCart </Link>
      {!localStorage.getItem("token") ? (
        <>
          <Link to='./login'> Login </Link>
          <Link to='./sign-up'> Sign-Up </Link>
        </>
      ) : (
        <Link to='./login'> Logout </Link>
      )}
      </div>
      </div>
    </div>
  );
};

export default Sidebar;







{
  /* 
  import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ loginState, setLoginState }) => {
  const history = useHistory();
  <div id="Sidebar">
<Link to="../Home"> Home </Link>
<Link to="../Search"> Search </Link>
{loginState ? (
  <Link to="../profile"> Profile </Link>
) : (
  <Link to="../Login"> Login </Link>
)}
{loginState ? (
  <form
    onSubmit={() => {
      setLoginState(false);
      history.push("/home");
    }}
  >
    <button type="submit"> Sign Out </button>
  </form>
) : null}
</div>
);
}; */
}
