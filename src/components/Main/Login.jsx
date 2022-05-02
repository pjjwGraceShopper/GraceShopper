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
      if (result.user.admin) {
        localStorage.setItem("isAdmin", result.user.admin);
      }
      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      navigate("/");
    }
  };

  const onLogOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("isAdmin");
    setLoginStatus(false);
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  return (
    <div>
      <div className="container-login">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-0 col-lg-0 col-xl-0">
            <div
              className="card-login"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body-p-10-text-center">
                <div className="mb-md-0-mt-md-0-pb-0">
                  {!loginStatus ? (
                    <>
                      <h2 className="fw-bold mb-0 mx-0 text-uppercase">
                        Login
                      </h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>
                      <form
                        onSubmit={(e) => {
                          onLogin(e);
                        }}
                      >
                        <div className="form-outline form-white mb-4">
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
                          <label className="form-label" htmlFor="typeUsernameX">
                            Username
                          </label>
                        </div>
                        <div className="form-outline form-white mb-4">
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
                          <label className="form-label" htmlFor="typePasswordX">
                            Password
                          </label>
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
                      type="submit"
                    >
                      Log Out
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
