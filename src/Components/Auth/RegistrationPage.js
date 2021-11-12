import { useState } from "react";
import { useNavigate } from "react-router";
import { LOGIN_PAGE_PATH } from "../../constants/routeConstants";

import "../../css/auth.css";
import { saveLocalItem } from "../../Helpers/localStorage";

export const RegistrationPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const OnSubmit = (event) => {
    event.preventDefault();

    const registrationData = {
      email,
      password,
      tel,
    };

    saveLocalItem(JSON.stringify(registrationData.email), registrationData);
    navigate(LOGIN_PAGE_PATH);
  };

  return (
    <form onSubmit={OnSubmit} className="auth-window">
      <div className="auth-container">
        <div className="login-title">
          <h3 data-testid="registrationPage-title">Registration Page</h3>
        </div>
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
        <input
          className="auth-input"
          type="tel"
          name="tel"
          id="tel"
          placeholder="Enter Phone Number"
          autoComplete="new-tel"
          onChange={(tel) => {
            setTel(tel.target.value);
          }}
          value={tel}
          required
        />
        <button className="button auth-btn" type="sumbit">
          Sign Up
        </button>
      </div>
    </form>
  );
};
