import { useState } from "react";
import TRIP from "../../images/TRIP.png";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={TRIP} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="list">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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

// <button class="login-btn login">Login</button>
// {/* <button class="login-btn logout">Logout</button>  */
