import React from "react";

const Navbar = () => {
  return (
    <nav className="pt-2 flex flex-col lg:flex-row justify-between mx-5">
      <div>
        <h1 className="text-xl text-zinc-700 font-bold">
          {new Date().toUTCString().slice(0, 16)}
        </h1>
        <h1 className="text-zinc-600  text-2xl font-bold">Food-App</h1>
      </div>
      <div>
      {/* <i className="ri-search-line p-3 mt-1 border-r-0 border border-zinc-500 rounded-l-full"></i> */}
        <input
          className="p-2 border mt-2 w-full lg:w-[40vw] border-zinc-200 outline-none rounded-lg shadow-md"
          type="text"
          name="search"
          placeholder="search here"
        />
      </div>
    </nav>
  );
};

export default Navbar;
