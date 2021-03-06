import { useState } from "react";
import { useNavigate } from "react-router";
import { AUTH_STATUS } from "../../constants/localStorageConstants";
import { HOME_PATH } from "../../constants/routeConstants";

import "../../css/auth.css";
import {
  saveLocalItem,
  getLocalItem,
  checkLocalStorage,
} from "../../Helpers/localStorage";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const loginData = {
      email,
      password,
    };
    const savedUser = getLocalItem(JSON.stringify(loginData.email));
    console.log(loginData);
    console.log(savedUser);
    if (
      checkLocalStorage(JSON.stringify(loginData.email)) &&
      loginData.email === savedUser.email &&
      loginData.password === savedUser.password
    ) {
      saveLocalItem(AUTH_STATUS, savedUser);
      navigate(HOME_PATH);
    } else {
      alert("wrong email/password");
    }
  };

  return (
    <form onSubmit={onSubmit} className="auth-window">
      <div className="auth-container">
        <div className="login-title">
          <h3>Login Page</h3>
        </div>
        <pre>Please Enter Your Email And Passowrd</pre>
        <input
          data-testid="input"
          className="auth-input"
          type="Email"
          name="Email"
          id="Email"
          placeholder="Enter Email"
          autoComplete="new-password"
          onChange={(email) => {
            setEmail(email.target.value);
          }}
          value={email}
          required
        />
        <input
          data-testid="input"
          pattern="[a-zA-Z0-9-]+"
          className="auth-input"
          type="Password"
          name="Parssword"
          id="Password"
          placeholder="Enter Password"
          autoComplete="new-password"
          onChange={(pass) => {
            setPassword(pass.target.value);
          }}
          value={password}
          required
        />
        <button
          data-testid="submitButton"
          className="button auth-btn"
          type="sumbit"
        >
          Log in
        </button>
      </div>
    </form>
  );
};
