import React from "react";
import { assets } from "../../assets/assets";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ onMenuToggle }) {
  return (
    <div className="bg-white ml-4 mr-8 mt-4 rounded-lg shadow-md p-4">
      <nav className="flex items-center justify-between px-2 font-lexend">
        {/* Menu Button (Visible on Mobile) */}
        <button className="lg:hidden text-gray-800 text-2xl" onClick={onMenuToggle}>
          <FaBars />
        </button>

        {/* Logo (Hidden on small screens) */}
        <div className="hidden md:block">
          <img src={assets.logo} alt="Logo" className="w-[100px] h-auto" />
        </div>

        {/* Right Section (User Info & Notifications) */}
        <div className="flex items-center space-x-8">
          {/* User Info */}
          <div className="flex items-center space-x-2">
            <img src={assets.account2} className="w-6 h-6" alt="User" />
            <h3 className="text-blue  font-bold">Hello, Mike</h3>
          </div>

          {/* Notifications & Messages */}
          <div className="flex items-center space-x-4">
            <Link to="/dashboard/notifications">
              <img src={assets.notification2} alt="Notifications" className="w-6 h-6" />
            </Link>
            <Link to="/dashboard/message">
              <img src={assets.message2} alt="Messages" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
