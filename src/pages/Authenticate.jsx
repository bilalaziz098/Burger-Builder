import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../components/Login";
import BurgerView from "../components/BurgerView";
import { useNavigate } from "react-router-dom";

function Authenticate() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return <div>{!isAuthenticated ? <Login /> : navigate("/")}</div>;
}

export default Authenticate;
