import { useState } from "react";

import "../../css/auth.css";

export const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="auth-window">
      <div className="auth-container">
        <div className="login-title">
          <h3>Registration Page</h3>
        </div>
        <pre>"email": "eve.holt@reqres.in", "password": "cityslicka" </pre>
        <input
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
        <button className="button auth-btn" type="sumbit">
          Sign Up
        </button>
      </div>
    </form>
  );
};
