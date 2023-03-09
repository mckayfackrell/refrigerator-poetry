import React from "react";
import Logo from "../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";
import Auth from "../utils/auth.js";

const Navbar = () => {
  // const [loggedIn, setLoggedIn] = useState(false); // new state variable to hold login status

  //const isLoggedIn = Auth.loggedIn;

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

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

        {Auth.loggedIn() ? (
          <>
            <li className="hover:underline md:text-xl m-4">
              <RouterLink to="/post">Create</RouterLink>
            </li>
          </>
        ) : (
          <></>
        )}

        {Auth.loggedIn() ? (
          <>
            <li className="hover:underline md:text-xl m-4">
              <RouterLink to="/dashboard">Dashboard</RouterLink>
            </li>
          </>
        ) : (
          <></>
        )}

        {/* conditionally render "Login" or "Logout" link based on login status */}

        {Auth.loggedIn() ? (
          <>
            <li className="hover:underline md:text-xl m-4">
              <RouterLink to="/" onClick={logout}>
                Logout
              </RouterLink>
            </li>
          </>
        ) : (
          <></>
        )}

        {!Auth.loggedIn() ? (
          <>
            <li className="hover:underline md:text-xl m-4">
              <RouterLink to="/login">Login</RouterLink>
            </li>
          </>
        ) : (
          <></>
        )}

        {!Auth.loggedIn() ? (
          <>
            <li className="hover:underline md:text-xl m-4">
              <RouterLink to="/signup">Sign Up</RouterLink>
            </li>
          </>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
