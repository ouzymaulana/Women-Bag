import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex px-24 relative right-0 left-0 top-0">
      <div className="flex py-10 border-t-4 border-black w-full font-inriaserif text-2xl font-semibold space-x-40">
        <div className="flex flex-col space-y-5">
          <span className="cursor-pointer">About Us</span>
          <span className="cursor-pointer">Contacts</span>
        </div>
        <div className="flex flex-col space-y-5">
          <span className="cursor-pointer">Coorperations</span>
          <span className="cursor-pointer">Addresses</span>
        </div>
        <div className="flex flex-col flex-1 items-end space-y-5">
          <span>Stay in Contact with us</span>
          <div className="flex gap-5">
            <span className="cursor-pointer">{<BsInstagram />}</span>
            <span className="cursor-pointer">{<FaTiktok />}</span>
            <span>+62-852-6427-0450</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
