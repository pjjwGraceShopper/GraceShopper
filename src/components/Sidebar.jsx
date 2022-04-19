import React from "react";
//import { link, useHistory } from "react-router-dom";

const Sidebar = ({ loginState, setLoginState }) => {
    const history = useHistory ();

    return (
        <div id = "Sidebar">
            <link to = "../Home"> Home </link>
            <link to ="../Search"> Search </link>
            {loginState ?(
                <link to ="../profile"> Profile </link>
            ) : (
                <link to ="../Login"> Login </link>
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
            ) : null }
        </div>
    );
};


export default Sidebar;