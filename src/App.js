import React from "react";

const App = () => {
  return (
    <div className="h-screen flex">
      <div className="absolute pointer-events-none  inset-32 shadow-[0_0_15px_rgba(0,0,0,0.3)]"></div>
      {/* left */}
      <div className="bg-[#1AEBB7] flex items-center flex-1 justify-end pl-28 2xl:pr-16">
        <img src="/genericbanklogo.png" alt="Generic bank logo" className="" />
      </div>
      {/* right */}
      <div className="flex flex-col justify-center w-3/5 items-center gap-6">
        <div className="flex flex-col w-3/5 xl:w-2/5 gap-6 text-center mr-10">
          <h1 className="uppercase text-6xl font-bold text-black/70">Login</h1>
          <input
            type="text"
            className="py-2 px-4 text-lg border-[1px] border-black/30"
            placeholder="Username"
          />
          <input
            type="password"
            className="py-2 px-4 text-lg border-[1px] border-black/30"
            placeholder="Password"
          />
          <div className="flex justify-between gap-10">
            <button className="bg-[#1AEBB7] border-[1px] border-black/70 text-white text-2xl py-2 px-3 font-semibold uppercase flex-grow">
              Login
            </button>
            <div className="flex flex-col font-semibold justify-start items-end text-xl gap-2">
              <a href="#">
                <p>Forgot Password</p>
              </a>
              <a href="#">
                <p>Register</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
