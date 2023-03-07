import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // new state variable to hold login status
  const handleClick = () => setNav(!nav);

  return (
    // navbar
    <div className=" w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff] text-black">
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
        <div className="ml-2 text-xl md:text-2xl hover:cursor-pointer">
          <RouterLink to="/">Refrigerator Poetry</RouterLink>
        </div>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:underline md:text-xl m-4">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li className="hover:underline md:text-xl m-4">
          <RouterLink to="/post">Create</RouterLink>
        </li>
        <li className="hover:underline md:text-xl m-4">
          <RouterLink to="/dashboard">Dashboard</RouterLink>
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

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        onClick={handleClick}
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center"
        }
      >
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <RouterLink onClick={handleClick} to="/">
            Home
          </RouterLink>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <RouterLink onClick={handleClick} to="/create">
            Create
          </RouterLink>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <RouterLink
            onClick={handleClick}
            to="/dashboard"
          >
            Dashboard
          </RouterLink>
        </li>
        {loggedIn ? (
          <li className="py-3 text-2xl md:text-4xl hover:underline">
            <RouterLink to="/" onClick={() => setLoggedIn(false)}>
              Logout
            </RouterLink>
          </li>
        ) : (
          <li className="py-3 text-2xl md:text-4xl hover:underline">
            <RouterLink to="/login">Login</RouterLink>
          </li>
        )}
      </ul>

      {/* footer */}
      <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-[#ffffff]md:flex md:items-center md:justify-between md:p-3">
        <span className="text-sm text-black sm:text-center dark:black">
          © 2023
        </span>
      </footer>
    </div>
  );
};

export default Navbar;
