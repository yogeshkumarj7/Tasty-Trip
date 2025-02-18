import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../utils/authSlice";

const LoginSignup = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`
        ${
          isLoggedIn
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }
        text-white py-2 px-6 rounded-lg
        font-semibold
        transition-colors duration-200
      `}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
};

export default LoginSignup;
