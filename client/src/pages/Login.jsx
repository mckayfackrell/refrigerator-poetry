import React from "react";

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
      </div>
    </div>
  );
}
