// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../utils/authSlice";

// const LoginSignup = () => {
//   const { isLoggedIn } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     if (!isLoggedIn) {
//       navigate("/login");
//     } else {
//       dispatch(logout());
//       navigate("/");
//     }
//   };

//   return (
//     <button
//       onClick={handleButtonClick}
//       className={`
//         ${
//           isLoggedIn
//             ? "bg-red-500 hover:bg-red-600"
//             : "bg-green-500 hover:bg-green-600"
//         }
//         text-white py-2 px-6 rounded-lg
//         font-semibold
//         transition-colors duration-200
//       `}
//     >
//       {isLoggedIn ? "Logout" : "Login"}
//     </button>
//   );
// };

// export default LoginSignup;

/////................

// LoginSignup.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../firebaseConfig";
import { motion } from "framer-motion";

const LoginSignup = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      try {
        await logout();
        dispatch({ type: "LOGOUT" });
        navigate("/");
      } catch (error) {
        console.error("Logout failed", error);
      }
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleButtonClick}
      className={`
        ${
          isLoggedIn
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }
        text-white py-2 px-6 rounded-lg font-semibold transition-colors duration-200
      `}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </motion.button>
  );
};

export default LoginSignup;
