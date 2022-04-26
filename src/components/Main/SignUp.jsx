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
      <form onSubmit={onSignUp}>
        <input
          value={username}
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={firstName}
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          value={lastName}
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          value={email}
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign Up</button>
      </form>
      {signUpMessage.error ? (
        <>
          <h3>{signUpMessage.name}</h3>
        </>
      ) : null}
    </div>
  );
};

export default SignUp;
