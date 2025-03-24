import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-4 left-0 lg:ml-4 md:ml-1  rounded-3xl  w-[250px] h-screen bg-white shadow-md transform transition-all duration-300 ease-in-out z-50
      ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 lg:w-[250px]`}
    >
      {/* Close Button - Only Visible on Small Screens */}
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-700 lg:hidden">
        <FaTimes size={24} />
      </button>

      <div className="mt-20 px-4">
        <ul className="space-y-8">
          {[
            { to: "/dashboard", label: "Dashboard", icon: assets.dashboard },
            { to: "/dashboard/course", label: "Course Details", icon: assets.course },
            { to: "/dashboard/message", label: "Messages", icon: assets.message },
            { to: "/dashboard/notifications", label: "Notifications", icon: assets.notification },
            { to: "/dashboard/library", label: "Library", icon: assets.library },
          ].map((item, index) => (
            <li key={index} className="flex space-x-3 hover:bg-textHover p-3 rounded-lg">
              <img src={item.icon} className="w-6 h-6 mt-1" alt={item.label} />
              <Link to={item.to} className="text-lg font-bold text-blue">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Profile Section */}
        <div className="mt-20 px-3">
          <div className="flex items-center space-x-3 hover:bg-textHover p-3 rounded-lg">
            <img src={assets.account} className="w-6 h-6" alt="Profile" />
            <Link to={"/dashboard/profile"} className="text-lg font-bold text-blue">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
