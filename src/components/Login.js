import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (loginbtn === "Login") {
      setLoginbtn("LogOut");
      navigate("/login"); // Navigate to the login page
    } else {
      setLoginbtn("Login");
    }
  };

  return (
    <div className="flex flex-colitems-center">
      <button
        onClick={handleButtonClick}
        className={`${
          loginbtn === "Login" ? "bg-green-400" : "bg-red-400"
        } text-white py-1 px-4 rounded transition-colors duration-300 mb-4`}
      >
        {loginbtn}
      </button>
    </div>
  );
};

export default Login;
