// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [loginbtn, setLoginbtn] = useState("Login");
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     if (loginbtn === "Login") {
//       setLoginbtn("LogOut");
//       navigate("/login"); // Navigate to the login page
//     } else {
//       setLoginbtn("Login");
//     }
//   };

//   return (
//     <div className="flex flex-colitems-center">
//       <button
//         onClick={handleButtonClick}
//         className={`${
//           loginbtn === "Login" ? "bg-green-400" : "bg-red-400"
//         } text-white py-1 px-4 rounded transition-colors duration-300 mb-4`}
//       >
//         {loginbtn}
//       </button>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../utils/authSlice";

const Login = () => {
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

export default Login;
