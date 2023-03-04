import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // new state variable to hold login status
  const handleClick = () => setNav(!nav);

  return (
    // navbar
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff] text-black">
      {/* logo */}
      <div className="flex items-center">
        <Link to="home" smooth={true} duration={500}>
          <img
            className="hover:cursor-pointer"
            src={Logo}
            alt="Fridge"
            style={{ width: "60px" }}
          />
        </Link>
        <div className="ml-2 text-xl md:text-2xl">Refrigerator Poetry</div>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:underline md:text-xl m-4">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:underline md:text-xl m-4">
          <Link to="about" smooth={true} duration={500}>
            Create
          </Link>
        </li>
        <li className="hover:underline md:text-xl m-4">
          <Link to="skills" smooth={true} duration={500}>
            Dashboard
          </Link>
        </li>
        {/* conditionally render "Login" or "Logout" link based on login status */}
        {loggedIn ? (
          <li className="hover:underline md:text-xl m-4">
            <Link to="/" onClick={() => setLoggedIn(false)}>
              Logout
            </Link>
          </li>
        ) : (
          <li className="hover:underline md:text-xl m-4">
            <Link to="projects" smooth={true} duration={500}>
              Login
            </Link>
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
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Create
          </Link>
        </li>
        <li className="py-3 text-2xl md:text-4xl hover:underline">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Dashboard
          </Link>
        </li>
        {loggedIn ? (
          <li className="py-3 text-2xl md:text-4xl hover:underline">
            <Link to="/" onClick={() => setLoggedIn(false)}>
              Logout
            </Link>
          </li>
        ) : (
          <li className="py-3 text-2xl md:text-4xl hover:underline">
            <Link to="projects" smooth={true} duration={500}>
              Login
            </Link>
          </li>
        )}
      </ul>

      {/* footer */}
      <footer class="fixed bottom-0 left-0 z-20 w-full p-2 bg-[#ffffff]md:flex md:items-center md:justify-between md:p-3">
        <span class="text-sm text-black sm:text-center dark:black">© 2023</span>
      </footer>
    </div>
  );
};

export default Navbar;
