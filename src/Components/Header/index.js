import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { PiUserBold } from "react-icons/pi";
import { LuSearch } from "react-icons/lu";

export default function Header() {
  return (
    <header className="flex px-24 max-sm:px-0 fixed right-0 left-0 top-0 bg-white z-10">
      <div className="flex py-10 max-sm:px-5 border-b-4 border-black w-full">
        <div className="te text-5xl font-opensans font-bold">
          <h2>WOMBAG</h2>
        </div>
        <nav className="flex w-full pl-36 justify-between items-center">
          <ul className="flex text-xl gap-5 font-semibold">
            <li>
              <a href="#ngg">Collections</a>
            </li>
            <li>
              <a href="#ngg">Sales</a>
            </li>
          </ul>
          <ul className="flex gap-10 max-sm:fixed">
            <li className="flex flex-col font-medium cursor-pointer items-center max-sm:hidden">
              <a href="#ngg">
                <LuSearch size={"2em"} className="tex font-extrabold" />
              </a>
              <span>Search</span>
            </li>
            <li className="flex flex-col font-medium cursor-pointer items-center">
              <a href="#ngg">
                <PiUserBold size={"2em"} className="tex font-extrabold" />
              </a>
              <span>Account</span>
            </li>
            <li className="flex flex-col font-medium cursor-pointer items-center">
              <a href="#ngg">
                <PiShoppingCartSimpleBold size={"2em"} />
              </a>
              <span>cart</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
