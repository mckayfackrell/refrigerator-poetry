import React from "react";

const Create = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#ffffff]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-7xl font-bold text-black">
              Create
            </h1>
            <p className="py-4 max-w-[700px] text-1xl lg:text-2xl">
              This is where a post will go
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
