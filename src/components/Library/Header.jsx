import React from "react";
import { assets } from "../../assets/assets";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ onMenuToggle }) {
  return (
    <div className="bg-white mx-4  mt-4 rounded-lg shadow-md py-2 px-4">
      <nav className="flex  justify-between font-lexend">
        {/* Menu Button (Visible on Mobile) */}
        <button
          className="lg:hidden text-gray-800 text-2xl"
          onClick={onMenuToggle}
        >
          <FaBars />
        </button>

        {/* Logo (Hidden on small screens) */}
        <div className="md:block pt-2">
          <h2 className="font-semibold text-[29px] text-notif">Library</h2>
        </div>

        {/* Right Section (User Info & Notifications) */}
        <div className="items-center space-x-4 hidden md:flex">
          <button className="py-1 px-6 bg-blueHover font-semibold hover:bg-textBlue rounded-lg text-white">
            All
          </button>
          <Link to="/dashboard/message">
            <button className="py-1 px-6 bg-blueHover font-semibold hover:bg-textBlue rounded-lg text-white">
              Docs
            </button>
          </Link>
          <button className="py-1 px-6 bg-blueHover font-semibold  hover:bg-textBlue rounded-lg text-white">
            Video Recordings
          </button>
        </div>

        {/* select */}
        <div className=" hidden  md:flex flex-col ">
          <Link>
              <p className="pt-1.5 text-blueHover font-semibold text-[16px]">Select Course</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
