import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

export default function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      {/* <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={magnetImg}
        alt="/"
      /> */}
      <div className="flex justify-center items-center h-full wallpaper">
        {data ? (
          <p>
            Success! You may now head{" "}
            <RouterLink to="/">back to the homepage.</RouterLink>
          </p>
        ) : (
          <form
            onSubmit={handleFormSubmit}
            className="max-w-[400px] w-full mx-auto bg-white p-8"
          >
            <h2 className="text-4xl font-bold text-center py-4">Sign Up</h2>
            <div className="flex flex-col mb-4">
              <label>Username</label>
              <input
                name="username"
                onChange={handleChange}
                value={formState.name}
                className="border relative bg-gray-100 p-2 input-field"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Email</label>
              <input
                name="email"
                onChange={handleChange}
                value={formState.email}
                className="border relative bg-gray-100 p-2 input-field"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Password</label>
              <input
                name="password"
                onChange={handleChange}
                value={formState.password}
                className="border relative bg-gray-100 p-2 input-field"
                type="password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-8 bg-[#154c79] relative text-white"
            >
              Sign In
            </button>
            <div className="text-center mt-8">
              Already a member?{" "}
              <div>
                <RouterLink
                  className="text-black underline hover:cursor-pointer"
                  to="/login"
                >
                  Log in now
                </RouterLink>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
