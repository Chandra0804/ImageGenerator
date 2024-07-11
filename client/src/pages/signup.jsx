import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const handleSubmit = async (e) => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t">
      <div className="w-90 flex flex-row mx-auto items-center justify-center">
          <img src="Mobile login-bro.png" alt="login" className="w-2/5 ml-40 rounded-2xl" />
        <div className="w-1/3 mx-auto mr-25 p-10 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl shadow-lg flex flex-row">
          <div className="w-full">
            <h1 className="text-2xl font-bold text-black">Sign Up</h1>
            <hr className="w-20 mt-2 border-black"></hr>
            <h1 className="text-l font-bold text-black my-6">Welcome</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-white border-opacity-20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-15 backdrop-blur-sm "
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black-500"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-white border-opacity-20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-15 backdrop-blur-sm "
                  required
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black-500"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-white border-opacity-20 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-15 backdrop-blur-sm "
                  required
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black-500 bg-gradient-to-t from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex items-center justify-center mt-4">
                <h1 className="text-sm font-medium">Already a User? 
                <a
                  href="/signup"
                  className="text-sm font-medium text-black-500 hover:text-black ml-1 mr-1 text-yellow-500"
                >
                  Login
                </a>
                Here
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
