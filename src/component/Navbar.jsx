import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full sm:px-10 px-5 py-5 flex justify-between items-center">
      <nav className="flex screen-max-width w-full">
        <img src={appleImg} alt="apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden ">
          {navLists.map((nav) => {
            return <div key={nav} className="px-5 cursor-pointer text-gray hover:text-white transition-all ">{nav}</div>;
          })}
        </div>
        <div className="flex justify-between items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="cart" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
