import { useState } from "react";
import { useNavigate } from "react-router";

import "../../css/auth.css";

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
    console.log(loginData);
    console.log(process.env.REACT_APP_API_URL);

    const fetchToken = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const result = await response.json();
      if (result.token) {
        navigate("/home");
      }
    };
    fetchToken();
  };

  return (
    <form onSubmit={onSubmit} className="auth-window">
      <div className="auth-container">
        <div className="login-title">
          <h3>Login Page</h3>
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
          Log in
        </button>
      </div>
    </form>
  );
};
