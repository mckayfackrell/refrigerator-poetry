import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false); // new state variable to hold login status

  return (
    // navbar
    <div className=" w-full flex-col flex justify-between items-center px-4 bg-[#ffffff] text-black">
      {/* logo */}
      <div className="flex items-center">
        <RouterLink to="/">
          <img
            className="hover:cursor-pointer"
            src={Logo}
            alt="Fridge"
            style={{ width: "60px" }}
          />
        </RouterLink>
        <div className=" sm:text-xl md:text-2xl hover:cursor-pointer">
          <RouterLink to="/">Refrigerator Poetry</RouterLink>
        </div>
      </div>

      {/* menu */}
      <ul className="flex">
        <li className="hover:underline md:text-xl m-4">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li className="hover:underline md:text-xl m-4">
          <RouterLink to="/post">Create</RouterLink>
        </li>
        <li className="hover:underline md:text-xl m-4">
          <RouterLink to="/dashboard/:id">Dashboard</RouterLink>
        </li>
        {/* conditionally render "Login" or "Logout" link based on login status */}
        {loggedIn ? (
          <li className="hover:underline md:text-xl m-4">
            <RouterLink to="/" onClick={() => setLoggedIn(false)}>
              Logout
            </RouterLink>
          </li>
        ) : (
          <li className="hover:underline md:text-xl m-4">
            <RouterLink to="/login">Login</RouterLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
