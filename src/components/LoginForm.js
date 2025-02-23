import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/authSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    setUsername("");
    setEmail("");
    setPassword("");
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login(username));
      navigate("/");
    }
  };

  return (
    <div className={`h-screen w-full flex items-center justify-center transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-teal-50 to-emerald-50'
    } p-4`}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>Welcome Back</h2>
          <p className={`mt-2 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Please log in to continue</p>
        </div>

        <div className={`rounded-xl shadow-xl p-8 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                htmlFor="username"
              >
                Username
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20' 
                    : 'bg-white border-gray-300 text-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-200'
                }`}
                id="username"
                type="text"
                autoComplete="off"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20' 
                    : 'bg-white border-gray-300 text-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-200'
                }`}
                id="email"
                type="email"
                autoComplete="off"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20' 
                    : 'bg-white border-gray-300 text-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-200'
                }`}
                id="password"
                type="password"
                autoComplete="off"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <Link
                to="/forgot-password"
                className={`text-sm hover:underline transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-teal-400 hover:text-teal-300' 
                    : 'text-teal-600 hover:text-teal-700'
                }`}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;