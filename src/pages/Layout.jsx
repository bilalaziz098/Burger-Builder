import React from "react";
import logo from "../assets/Burger.png";
import "../components/Nav.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { Outlet, Link, useNavigate } from "react-router-dom";

function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      {!isAuthenticated ? (
        <div className="navbar">
          <nav>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="links">
              <ul>
                <li className="liNav">
                  <Link to="/">Burger Builder</Link>
                </li>
                <li className="liNav">
                  <Link to="/auth">Authenticate</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      ) : (
        <div className="navbar">
          <nav>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="links">
              <ul>
                <li className="liNav">
                  <Link to="/">Burger Builder</Link>
                </li>
                <li className="liNav">
                  <Link to="/orders">Your Orders</Link>
                </li>
                <li className="liNav">
                  <button className="lout" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default Layout;
