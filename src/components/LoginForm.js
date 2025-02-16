// first....
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/authSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login(username)); // Dispatch login action with username instead of email
      navigate("/");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-emerald-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Please log in to continue</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-gray-700"
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-gray-700"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-gray-700"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <Link
                to="/forgot-password"
                className="text-sm text-teal-600 hover:text-teal-700"
              >
                Forgot password?
              </Link>
            </div>

            <button
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-200 transition-all duration-200"
              type="submit"
            >
              Log In
            </button>

            <div className="text-center">
              <span className="text-gray-600">Don't have an account?</span>{" "}
              <Link
                to="/signup"
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
// //...................... second

// // LoginForm.js
// // import React, { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import { login, loginWithGoogle } from "../firebaseConfig";

// // const LoginForm = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await login(email, password);
// //       navigate("/");
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   const handleGoogleLogin = async () => {
// //     try {
// //       await loginWithGoogle();
// //       navigate("/");
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   return (
// //     <div className="h-screen flex items-center justify-center">
// //       <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded">
// //         <h2 className="text-xl font-bold mb-4">Login</h2>
// //         {error && <p className="text-red-500">{error}</p>}
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //           className="border p-2 mb-2 w-full"
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //           className="border p-2 mb-2 w-full"
// //         />
// //         <button type="submit" className="bg-blue-500 text-white p-2 w-full">
// //           Login
// //         </button>
// //         <button
// //           type="button"
// //           onClick={handleGoogleLogin}
// //           className="bg-red-500 text-white p-2 w-full mt-2"
// //         >
// //           Login with Google
// //         </button>
// //         <div className="text-center">
// //           <span className="text-gray-600">Don't have an account?</span>{" "}
// //           <Link
// //             to="/signup"
// //             className="text-teal-600 hover:text-teal-700 font-medium"
// //           >
// //             Sign up
// //           </Link>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginForm;

// //..........
// // import React, { useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { login, loginWithGoogle } from "../firebaseConfig";
// // import { Eye, EyeOff } from "lucide-react";
// // import { motion } from "framer-motion";
// // import { useDispatch } from "react-redux";
// // import { toast } from "react-hot-toast";

// // const LoginForm = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     setEmail("");
// //     setPassword("");
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (email && password) {
// //       try {
// //         const { user, username } = await login(email, password);
// //         dispatch({
// //           type: "LOGIN",
// //           payload: {
// //             user: user,
// //             username: username,
// //           },
// //         });
// //         toast.success(`Welcome back, ${username}!`);
// //         navigate("/");
// //       } catch (error) {
// //         setError(error.message);
// //         toast.error("Login failed. Please check your credentials.");
// //       }
// //     }
// //   };

// //   const handleGoogleLogin = async () => {
// //     try {
// //       const { user, username } = await loginWithGoogle();
// //       dispatch({
// //         type: "LOGIN",
// //         payload: {
// //           user: user,
// //           username: username,
// //         },
// //       });
// //       toast.success(`Welcome, ${username}!`);
// //       navigate("/");
// //     } catch (error) {
// //       setError(error.message);
// //       toast.error("Google login failed. Please try again.");
// //     }
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 50 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5 }}
// //       className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-emerald-50 p-4"
// //     >

// //     </motion.div>
// //   );
// // };

// // export default LoginForm;

// //.............................

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { login, loginWithGoogle } from "../firebaseConfig";
// import { Eye, EyeOff } from "lucide-react";
// import { motion } from "framer-motion";
// import { useDispatch } from "react-redux";
// import { toast } from "react-hot-toast";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Clear form fields on component mount
//   useEffect(() => {
//     setEmail("");
//     setPassword("");
//     setError(null);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (email && password) {
//       try {
//         const { user, username } = await login(email, password);
//         dispatch({
//           type: "LOGIN",
//           payload: {
//             user: user,
//             username: username,
//           },
//         });
//         toast.success(`Welcome back, ${username}!`);
//         // Clear form fields after successful login
//         setEmail("");
//         setPassword("");
//         navigate("/");
//       } catch (error) {
//         setError(error.message);
//         toast.error(error.message);
//       }
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const { user, username } = await loginWithGoogle();
//       dispatch({
//         type: "LOGIN",
//         payload: {
//           user: user,
//           username: username,
//         },
//       });
//       toast.success(`Welcome, ${username}!`);
//       navigate("/");
//     } catch (error) {
//       setError(error.message);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-emerald-50 p-4"
//     >
//       <motion.div
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//         transition={{ type: "spring", stiffness: 300 }}
//         className="w-full max-w-md"
//       >
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
//           <p className="text-gray-600 mt-2">Please log in to continue</p>
//         </div>

//         <div className="bg-white rounded-xl shadow-xl p-8">
//           {/* {error && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
//             >
//               <p className="text-red-600 text-sm">{error}</p>
//             </motion.div>
//           )} */}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email Input */}
//             <div>
//               <label
//                 className="block text-gray-700 text-sm font-semibold mb-2"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <motion.input
//                 whileFocus={{ scale: 1.02 }}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-gray-700"
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 autoComplete="off"
//               />
//             </div>

//             {/* Password Input */}
//             <div className="relative">
//               <label
//                 className="block text-gray-700 text-sm font-semibold mb-2"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <motion.input
//                 whileFocus={{ scale: 1.02 }}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200 text-gray-700 pr-12"
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 autoComplete="new-password"
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-10 text-gray-600"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>

//             {/* Forgot Password Link */}
//             <div className="flex items-center justify-between">
//               <Link
//                 to="/forgot-password"
//                 className="text-sm text-teal-600 hover:text-teal-700"
//               >
//                 Forgot password?
//               </Link>
//             </div>

//             {/* Login Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-200 transition-all duration-200"
//               type="submit"
//             >
//               Log In
//             </motion.button>

//             {/* Divider */}
//             <div className="relative flex items-center justify-center my-6">
//               <div className="absolute w-full border-t border-gray-300"></div>
//               <div className="relative bg-white px-4">
//                 <span className="text-sm text-gray-500">Or continue with</span>
//               </div>
//             </div>

//             {/* Google Login Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="button"
//               onClick={handleGoogleLogin}
//               className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-teal-200 transition-all duration-200 flex items-center justify-center space-x-2"
//             >
//               <svg className="w-5 h-5" viewBox="0 0 24 24">
//                 {/* Google SVG Path */}
//                 <path
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   fill="#4285F4"
//                 />
//                 {/* Rest of Google SVG paths */}
//               </svg>
//               <span>Google</span>
//             </motion.button>

//             {/* Signup Link */}
//             <div className="text-center mt-6">
//               <span className="text-gray-600">Don't have an account?</span>{" "}
//               <Link
//                 to="/signup"
//                 className="text-teal-600 hover:text-teal-700 font-medium"
//               >
//                 Sign up
//               </Link>
//             </div>
//           </form>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default LoginForm;
