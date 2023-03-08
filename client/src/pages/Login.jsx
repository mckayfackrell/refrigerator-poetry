import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

import magnetImg from "../assets/magnet.jpg";

export default function Login(props) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

/*   // navigate to signup page
  const handleSignUpClick = () => {
    ("/signup");
  }; */

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={magnetImg}
        alt="/"
      />
      <div className="flex justify-center items-center h-full">
        {data ? (
          <p>
            Success! You may now head{" "}
            <RouterLink to="/">back to the homepage.</RouterLink>
            <div>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </div>
          </p>
        ) : (
          <form
            onSubmit={handleFormSubmit}
            className="max-w-[400px] w-full mx-auto bg-white p-8"
          >
            <h2 className="text-4xl font-bold text-center py-4">Login</h2>
            <div className="flex flex-col mb-4">
              <label>Email</label>
              <input
                name="email"
                onChange={handleChange}
                value={formState.email}
                className="border relative bg-gray-100 p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Password</label>
              <input
                name="password"
                onChange={handleChange}
                value={formState.password}
                className="border relative bg-gray-100 p-2"
                type="password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-8 bg-slate-600 relative text-white"
            >
              Sign In
            </button>
            {/* <p className="flex items-center">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p> */}
            <div className="text-center mt-8">
              Not a member?{" "}
              <div>
                <RouterLink className="text-black underline" to="/signup">
                  Sign up now
                </RouterLink>
              </div>
            </div>
          </form>
        )}
      </div>
      {error && (
        <div className="absolute bottom-0 left-0 right-0 my-3 p-3 bg-danger text-white text-center">
          {error.message}
        </div>
      )}
    </div>
  );
}
