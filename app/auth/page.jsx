"use client";

import { useState, useEffect } from "react";

const Authentication = () => {
  const [activeTab, setActiveTab] = useState("login");
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
      <div className="absolute w-full min-h-[calc(100vh-64px)] grid grid-cols-10 grid-rows-6 gap-4 p-4">
        {Array.from({ length: 60 }).map((_, index) => (
          <div
            key={index}
            className="p-2 rounded-md transition-all duration-200 hover:scale-106"
            style={{
              animation: `breath ${10 * 0.3}s linear infinite`,
              animationDelay: `${(index % 10) * (1.2 / (10 + 1))}s`,
            }}
          />
        ))}
      </div>
      <style>
        {`
          @keyframes breath {
            0% {
              background-color: #ffffff;
              transform: scale(1);
            }
            25% {
              background-color: #3949AB;
              transform: scale(1.1);
            }
            50% {
              background-color: #ffffff;
              transform: scale(1);
            }
            100% {
              background-color: #ffffff;
              transform: scale(1);
            }
          }
        `}
      </style>
      <div
        className="w-full max-w-4xl h-[468px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden z-10"
        id="card-conponent"
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/2 bg-indigo-600 p-8 text-white rounded-l-xl">
            <h2 className="text-3xl font-bold mb-6">
              {activeTab === "login" ? "Welcome Back," : "Welcome to Creathon"}
            </h2>
            <div className="flex space-x-4 mb-4">
              <button
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "login"
                    ? "bg-white text-indigo-600 font-medium"
                    : "bg-indigo-500 hover:bg-indigo-400"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Log In
              </button>
              <button
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "register"
                    ? "bg-white text-indigo-600 font-medium"
                    : "bg-indigo-500 hover:bg-indigo-400"
                }`}
                onClick={() => setActiveTab("register")}
              >
                Register
              </button>
            </div>
            <div className="hidden md:block">
              <p className="mb-4 text-indigo-200">
                {activeTab === "login"
                  ? "Log in to access your account."
                  : "Join our community today and unlock all features!"}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="relative w-full h-full overflow-hidden p-1">
              <div
                className={`transition-all duration-500 ease-in-out transform ${
                  activeTab === "login"
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0 absolute"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Log In
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="login-email"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      id="login-email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="mb-6">
                    <div className="flex mb-2">
                      <label
                        className="block text-gray-700 text-sm font-medium"
                        htmlFor="login-password"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex items-center mb-6 justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      className="text-sm text-indigo-600 hover:text-indigo-800"
                      href="#"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
                  >
                    Sign In
                  </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-500">
                  <span>Don't have an account? </span>
                  <button
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                    onClick={() => setActiveTab("register")}
                  >
                    Register
                  </button>
                </div>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out transform ${
                  activeTab === "register"
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Create Account
                </h3>
                <form>
                  <div className="mb-4">
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        id="name"
                        type="text"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="register-email"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      id="register-email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="register-password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
                  >
                    Create Account
                  </button>
                </form>
                <div className="mt-6 text-center text-sm text-gray-500">
                  <span>Already have an account? </span>
                  <button
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                    onClick={() => setActiveTab("login")}
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
