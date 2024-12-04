import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../components/Login";
import BurgerView from "../components/BurgerView";

function Authenticate() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return <div>{!isAuthenticated ? <Login /> : <BurgerView />}</div>;
}

export default Authenticate;
