import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/authSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    message: "Too weak",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    setUsername("");
    setEmail("");
    setPassword("");
  }, []);

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  const checkPasswordStrength = (pass) => {
    let score = 0;
    let message = "Too weak";

    if (pass.length === 0) {
      setPasswordStrength({ score: 0, message: "Too weak" });
      return;
    }

    // Length check
    if (pass.length > 6) score += 1;
    if (pass.length > 10) score += 1;

    // Complexity checks
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    // Set message based on score
    if (score === 1) message = "Weak";
    else if (score === 2) message = "Fair";
    else if (score === 3) message = "Good";
    else if (score === 4) message = "Strong";
    else if (score >= 5) message = "Very Strong";

    setPasswordStrength({ score, message });
  };

  const getStrengthColor = () => {
    switch (passwordStrength.score) {
      case 0:
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-orange-500";
      case 3:
        return "bg-yellow-500";
      case 4:
        return "bg-green-500";
      case 5:
        return "bg-emerald-500";
      default:
        return "bg-gray-300";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login(username));
      navigate("/");
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div
      className={`h-screen w-full flex items-center justify-center transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-teal-50 to-emerald-50"
      } p-4`}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2
            className={`text-3xl font-bold transition-colors duration-300 ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Welcome Back
          </h2>
          <p
            className={`mt-2 transition-colors duration-300 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Please log in to continue
          </p>
        </div>

        <div
          className={`rounded-xl shadow-xl p-8 transition-colors duration-300 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            autoComplete="off"
          >
            <div>
              <label
                className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                htmlFor="username"
              >
                Username
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
                    : "bg-white border-gray-300 text-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                }`}
                id="username"
                type="text"
                autoComplete="new-username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
                    : "bg-white border-gray-300 text-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                }`}
                id="email"
                type="email"
                autoComplete="new-email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
                    : "bg-white border-gray-300 text-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                }`}
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Password strength meter */}
              {password && (
                <div className="mt-2 space-y-1">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getStrengthColor()} transition-all duration-300`}
                      style={{
                        width: `${Math.min(100, passwordStrength.score * 20)}%`,
                      }}
                    ></div>
                  </div>
                  <p
                    className={`text-xs transition-colors duration-300 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Password strength: {passwordStrength.message}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <Link
                to="/forgot-password"
                className={`text-sm hover:underline transition-colors duration-300 ${
                  isDarkMode
                    ? "text-teal-400 hover:text-teal-300"
                    : "text-teal-600 hover:text-teal-700"
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
