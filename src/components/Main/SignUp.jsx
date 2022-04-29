import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, createUserCart } from "../../axios-services";

const SignUp = ({ setMe, loginStatus, setLoginStatus }) => {
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
      console.log("RESULT FROM SIGNUP", result.user);
      localStorage.setItem("token", result.token);
      localStorage.setItem("username", username);
      localStorage.setItem("id", result.user.id);
      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      setMe({
        token: result.token,
        id: result.user.id,
      });
      await createUserCart(result.user.id);
      console.log(result);
      navigate("/");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  return (
    <div>
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-0 col-lg-0 col-xl-0">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-10 text-center">
                <div className="mb-md-0 mt-md-0 pb-0">
                  <h2 className="fw-bold mb-0 mx-0 text-uppercase">Sign Up</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your info to Sign Up!
                  </p>
                  <form onSubmit={onSignUp}>
                    <div className="form-outline form-white mb-4">
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
                    <div className="form-outline form-white mb-4">
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
                    <div className="form-outline form-white mb-4">
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
                    <div className="form-outline form-white mb-4">
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
                    <div className="form-outline form-white mb-4">
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
                    <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          SignUp
                        </button>
                  </form>
                  {signUpMessage.error ? (
                    <>
                      <h3>{signUpMessage.name}</h3>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
