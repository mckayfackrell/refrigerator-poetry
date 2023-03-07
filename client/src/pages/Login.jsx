import React from "react";
<<<<<<< HEAD

function Login() {
  const handleReturnHome = () => {
    window.location.href = "/register";
  };

  return (
    <div name="home" className="w-full h-screen bg-[#ffffff]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 gap-8 flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl sm:text-7xl font-bold text-black">
                Login
              </h1>
              <p className="py-4 max-w-[700px] text-1xl lg:text-2xl">
                This is where a user can login
              </p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 ">
            <button
              onClick={handleReturnHome}
              className="text-black group bg-[#ffffff] border-[#000000] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f0f0f0]"
            >
              Register
            </button>
          </div>
        </div>
=======

import magnetImg from "../assets/magnet.jpg";

export default function Login() {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={magnetImg}
        alt="/"
      />
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold text-center py-4">
            Refrigerator Poetry
          </h2>
          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input className="border relative" bg-gray-100 p-2 type="text" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <button className="w-full py-3 mt-8 bg-slate-600 relative text-white">
            Sign In
          </button>
          <p className="flex items-center">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>
          <p className="text-center mt-8">Not a member? Sign up now</p>
        </form>
>>>>>>> feature/login
      </div>
    </div>
  );
}
<<<<<<< HEAD

export default Login;
=======
>>>>>>> feature/login
