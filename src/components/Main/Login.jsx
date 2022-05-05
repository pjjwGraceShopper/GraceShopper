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
      setTimeout(async () => {
        setMe({
          token: result.token,
          id: result.user.id,
          admin: result.user.admin,
        });
        // REMOVE LATER
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.user.username);
        localStorage.setItem("id", result.user.id);
        if (result.user.admin) {
          localStorage.setItem("admin", result.user.admin);
        }
        navigate("/");
      }, 500);
      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    }
  };

  const onLogOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("admin");
    setLoginStatus(false);
    navigate("/");
  };

  useEffect(() => {
    if (me.token) {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  return (
    <div className="login-container">
      <div className="login-field card-body-p-10-text-center">
        {!loginStatus ? (
          <>
            <h2 className="fw-bold mb-0 mx-0 text-uppercase">Login</h2>
            <p className="text-white-50 mb-5">
              Please enter your login and password!
            </p>
            <form
              className="login-form"
              onSubmit={(e) => {
                onLogin(e);
              }}
            >
              <div className="form-outline form-white mb-4">
                <label className="form-label" htmlFor="typeUsernameX">
                  Username
                </label>
                <input
                  value={username}
                  type="username"
                  placeholder="Username"
                  id="typeUsernameX"
                  className="form-control-form-control-lg"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="form-outline form-white mb-4">
                <label className="form-label" htmlFor="typePasswordX">
                  Password
                </label>
                <input
                  value={password}
                  type="password"
                  placeholder="Password"
                  id="typePasswordX"
                  className="form-control-form-control-lg"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="login-block">
                <button
                  className="btn btn-outline-light btn-lg px-5"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>

            {loginMessage.error ? (
              <>
                <h3>{loginMessage.name}</h3>
              </>
            ) : null}
          </>
        ) : (
          <button
            onClick={onLogOut}
            className="btn btn-outline-light btn-lg px-5"
            id="logoutButton"
            type="submit"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
