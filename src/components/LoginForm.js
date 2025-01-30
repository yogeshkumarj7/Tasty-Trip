import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/authSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login(username));
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md"
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500 transition-colors duration-200"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500 transition-colors duration-200"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-200"
              type="submit"
            >
              Log In
            </button>
          </div>
          <p className="mt-4 text-center">
            Don't have an account ? 
            <Link to="/signup">
              <span className="text-emerald-500">SignUp</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
