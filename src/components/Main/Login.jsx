import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../axios-services/users_ajax";

const Login = ({ me, setMe, loginStatus, setLoginStatus }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState({});

  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    const result = await userLogin(username, password);
    if (result.error) {
      setLoginMessage(result);
    } else {
      setLoginStatus(true);
      setMe({
        token: result.token,
        id: result.user.id,
      });
      // REMOVE LATER
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", result.user.username);
      localStorage.setItem("id", result.user.id);
      if(result.user.admin){
        localStorage.setItem("isAdmin", result.user.admin)
      }
      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      navigate("/");
      console.log('is result from login: ', me.id)
    }
  };
  
  const onLogOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem('id')
    localStorage.removeItem("isAdmin")
    console.log("Username and token removed from localStorage!");
    setLoginStatus(false);
    navigate('/')
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  return (
    <div>
      {loginStatus ? (
        <button onClick={onLogOut}>Log Out</button>
      ) : (
        <>
          <form
            onSubmit={(e) => {
              onLogin(e);
            }}
          >
            <input
              value={username}
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              value={password}
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Login</button>
          </form>
          {loginMessage.error ? (
            <>
              <h3>{loginMessage.name}</h3>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Login;
