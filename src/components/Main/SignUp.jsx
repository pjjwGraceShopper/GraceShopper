import React, { useState, useEffect } from "react";
import { registerUser, createUserCart } from "../../axios-services"


const SignUp = ({ setMe }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [signUpMessage, setSignUpMessage] = useState({});

  const onSignUp = async (e) => {
    e.preventDefault();
    const result = await registerUser(username, password);
    if (result.error) {
      setSignUpMessage(result);
    }
    // REMOVE LATER
    localStorage.setItem("token", result.token);
    localStorage.setItem("username", username);
    localStorage.setItem("id", result.user.id);
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    setMe({
      token: result.token, 
      id : result.user.id
    })
    await createUserCart(result.user.id)
    console.log(result)
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