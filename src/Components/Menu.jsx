import React from "react";

const Menu = () => {
  return (
    <div className="ml-5 mt-8">
      <h3 className="font-semibold text-zinc-500">Find The Best Food</h3>
      <div className="my-3 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button className="hover:bg-green-500 bg-zinc-400 hover:text-white duration-300 px-2 py-1 rounded-md font-bold ">
          All
        </button>
        <button className="hover:bg-green-500 bg-zinc-400 hover:text-white duration-300 px-2 py-1 rounded-md font-bold ">
          Lunch
        </button>
        <button className="hover:bg-green-500 bg-zinc-400 hover:text-white duration-300 px-2 py-1 rounded-md font-bold ">
          Breakfast
        </button>
        <button className="hover:bg-green-500 bg-zinc-400 hover:text-white duration-300 px-2 py-1 rounded-md font-bold ">
          Dinner
        </button>
      </div>
    </div>
  );
};

export default Menu;
