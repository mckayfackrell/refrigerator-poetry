<<<<<<< HEAD
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
=======
import React from "react";
// import Link from "link-react";

const Navbar = () => {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <img src="//link to icon" alt="" />
        </div>
        <div className="shrink w-80 sm:order-2">
          <a className="font-bold uppercase text-3xl">Refrigerator Poetry</a>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            {/* <Link href={"/"}>
              <a>Home</a>
            </Link>
            <Link href={"/dashboard"}>
              <a>Dashboard</a>
            </Link>
            <Link href={"/login"}>
              <a>Login</a>
            </Link> */}
          </div>
        </div>
      </div>
    </header>
>>>>>>> feature/login
  );
};

export default Navbar;
