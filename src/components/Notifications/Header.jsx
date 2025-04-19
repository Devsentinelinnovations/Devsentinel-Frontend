import React from "react";
import { assets } from "../../assets/assets";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ onMenuToggle }) {
  return (
    <div className="bg-white mx-4  mt-4 rounded-lg shadow-md py-2 px-4">
      <nav className="flex justify-between font-lexend">
        {/* Menu Button (Visible on Mobile) */}
        <button
          className="lg:hidden text-gray-800 text-2xl"
          onClick={onMenuToggle}
        >
          <FaBars />
        </button>

        {/* Logo (Hidden on small screens) */}
        <div className="md:block pt-2">
          <h2 className="font-semibold text-[29px] text-notif">Notifications</h2>
        </div>

        {/* Right Section (User Info & Notifications) */}
        <div className="items-center space-x-4 hidden md:flex">
          <button className="py-1 px-6 bg-blueHover font-semibold  hover:bg-textBlue rounded-lg text-white">
            Assignments
          </button>
          <Link to="/dashboard/message">
            <button className="py-1 px-6 bg-blueHover font-semibold hover:bg-textBlue rounded-lg text-white">
              Messages
            </button>
          </Link>
        </div>

        {/* Notifications & Messages */}
        <div className=" hidden space-y-2 md:flex flex-col items-center space-x-4">
          <div className="flex">
            <img src={assets.ver} className="w-4 h-4" />
            <Link>
              <p className="pl-2 text-[12px] underline">Mark all as read</p>
            </Link>
          </div>
          <div className="flex">
            <img src={assets.ver} className="w-4 h-4" />
            <Link>
              <p className="pl-2 text-[12px] underline">Clear notifications</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
