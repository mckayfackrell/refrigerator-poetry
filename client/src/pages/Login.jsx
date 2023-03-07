import React from "react";

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
      </div>
    </div>
  );
}

export default Login;
