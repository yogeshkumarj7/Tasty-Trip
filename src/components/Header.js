import { useState } from "react";
import TRIP from "../../images/TRIP.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const onlineStstus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={TRIP} alt="logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="list">
          <li>Online Status:{onlineStstus ? "Online" : "Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              loginbtn === "Login"
                ? setLoginbtn("LogOut")
                : setLoginbtn("Login");
              console.log(loginbtn);
            }}
            className={
              loginbtn == "Login" ? "login-btn login" : "login-btn logout"
            }
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
