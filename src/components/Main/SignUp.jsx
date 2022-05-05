import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, createUserCart, createUserLibrary } from "../../axios-services";

const SignUp = ({ me, setMe, loginStatus, setLoginStatus }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [signUpMessage, setSignUpMessage] = useState({});

  const navigate = useNavigate();

  const onSignUp = async (e) => {
    e.preventDefault();
    const result = await registerUser(
      username,
      password,
      email,
      firstName,
      lastName
    );
    if (result.error) {
      setSignUpMessage(result);
    } else {
      // REMOVE LATER
      setTimeout(async () => {
        await createUserCart(result.user.id);
        await createUserLibrary(result.user.id)
        setMe({
          token: result.token,
          id: result.user.id,
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
    }
  };

  useEffect(() => {
    if (me.token) {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  return (

      <div className="container py-3 h-100">

            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body-p-10-text-center">
                <div className="sign-container">
                  <h2 className="fw-boldmb-0mx-0text-uppercase">Sign Up</h2>
                  <p className="text-white-50mb-5">
                    Please enter your info to Sign Up!
                  </p>
                  <div className="block-sign">
                  <form onSubmit={onSignUp}>
                    <div className="form-outline-container">
                      <input
                        value={firstName}
                        type="text"
                        placeholder="First Name"
                        id="registerName"
                        className="form-control"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-outline-container">
                      <input
                        value={lastName}
                        type="text"
                        placeholder="Last Name"
                        id="registerLastName"
                        className="form-control"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>
                    
                    <div className="form-outline-container">
                      <input
                        value={email}
                        type="text"
                        placeholder="Email"
                        id="registerEmail"
                        className="form-control"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-outline-container">
                      <input
                        value={username}
                        type="username"
                        placeholder="Username"
                        id="registerUsername"
                        className="form-control"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-outline-container">
                      <input
                        value={password}
                        type="password"
                        placeholder="Password"
                        id="registerPassword"
                        className="form-control"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="login-block-signup">
                    <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          SignUp
                        </button>
                        </div>
                  </form>
                  </div>
                  {signUpMessage.error ? (
                    <>
                      <h3>{signUpMessage.name}</h3>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
  );
};

export default SignUp;
