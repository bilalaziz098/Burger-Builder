import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../features/auth/authSlice";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (name === "a.com" && pass === "123") {
      dispatch(loginSuccess({ email: name }));
      setName("");
      setPass("");
    } else {
      dispatch(loginFailure("Invalid credentials"));
    }
  };

  return (
    <div className="authDiv">
      <form className="formDiv" onSubmit={login}>
        <input
          type="text"
          value={name}
          placeholder="E-Mail Address"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="password"
          value={pass}
          placeholder="Password"
          onChange={(event) => setPass(event.target.value)}
        />
        <button className="formBtn" type="submit">
          <strong style={{ color: "#5c9210", fontSize: 17 }}>Submit</strong>
        </button>
      </form>
      <button className="secondBtn" type="submit">
        <strong style={{ color: " #944317", fontSize: 17 }}>
          Switch to sign in
        </strong>
      </button>
    </div>
  );
}

export default Login;
