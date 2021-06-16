import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import "../../styles/login.scss";
import { Logo } from "../utiles/utiles";
import Button from "@material-ui/core/Button";
import { loginValidation } from "../utiles/validation";

export default function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log("err", error);
    if (Object.keys(error).length === 0 && clicked) {
      onLoggedIn();
    }
  }, [error, clicked]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setClicked(true);
    setError(loginValidation(state));
  };

  const onLoggedIn = () => {
    console.log("loggrf");
  };

  return (
    <div className="login-container">
      <div className="login-left-container">
        <div className="login-welcome-wrapper">
          <h1 className="login-welcome-text">Welcome</h1>
        </div>
        <form className="login-form-container" onSubmit={onSubmit}>
          <div className="login-input-wrapper">
            <TextField
              helperText={error?.username}
              className="login-form-input"
              required
              id="standard-required"
              label="Email/Username"
              value={state.username}
              onChange={onChange}
              name="username"
            />
          </div>
          <div className="login-input-wrapper">
            <TextField
              helperText={error?.password}
              className="login-form-input"
              required
              id="standard-required"
              label="Password"
              type="password"
              value={state.password}
              onChange={onChange}
              name="password"
            />
          </div>
          <Button
            className="login-button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
      <div className="login-right-container">
        <Logo color="#ffffff" size="70px" />
      </div>
    </div>
  );
}
