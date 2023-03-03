import React from "react";


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
                    <a>Home</a>
                    <a>Dashboard</a>
                    <a>Login</a>
                </div>
            </div>
        </div>
    </header>
  )
}


export default Navbar;

