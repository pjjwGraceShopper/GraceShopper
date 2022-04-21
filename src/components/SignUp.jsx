import React, { useState } from "react";
import { registerUser } from "../axios-services/users"

const SignUp = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signUpMessage, setSignUpMessage] = useState({});

  const onSignUp = async (e) => {
    e.preventDefault();
    const result = await registerUser(username, password);
    if (result.error) {
      setSignUpMessage(result);
    }
    // localStorage.setItem("token", result.token);
    // localStorage.setItem("username", username);
    // const myToken = result.token;
    // setToken(myToken);
  };

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

export default SignUp