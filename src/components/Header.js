import { useState } from "react";
import TRIP from "../../images/TRIP.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const onlineStstus = useOnlineStatus();
  return (
    <div className="flex z-10 justify-between items-center w-screen h-[80px] bg-[var(--header-bg-color)] rounded-[5px] shadow-[rgba(0,_0,_0,_0.61)_-2px_7px_5px_-6px] text-[var(--light-text-color)] font-bold fixed top-0 left-0 z-[999] overflow-y-hidden">
      {/* Logo section */}
      <div className="logo-container flex justify-center items-center p-4">
        <Link to="/">
          <img
            className=" logo w-32 h-auto object-contain"
            src={TRIP}
            alt="logo"
          />
        </Link>
      </div>
      {/* Navigation section */}
      <div className="list-none flex items-center justify-between mr-[30px] ">
        <ul className="flex space-x-6 p-10">
          {/* <li>Online Status:{onlineStstus ? "Online" : "Offline"}</li> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
