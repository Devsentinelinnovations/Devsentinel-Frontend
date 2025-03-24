import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="top-4  ml-4 mt-4 w-50 h-150 rounded-3xl bg-white">
      <div className="mt-18">
        <div>
          <ul className="space-y-8">
            <div className="flex pl-4 hover:bg-textHover">
              <img src={assets.dashboard} className="w-5 h-5 mt-1" alt="" />
              <Link to={"/dashboard"}>
                <li className=" font-bold text-lg pl-2 text-blue">
                  Dashboard
                </li>
              </Link>
            </div>
            <div className="flex pl-4 hover:bg-textHover">
              <img src={assets.course} className="w-5 h-5 mt-1" alt="" />
              <Link to={"/dashboard/course"}>
                <li className=" font-bold text-lg pl-2 text-blue">
                  Course Details
                </li>
              </Link>
            </div>
            <div className="flex pl-4 hover:bg-textHover">
              <img src={assets.message} className="w-5 h-5 mt-1" alt="" />
              <Link to={"/dashboard/message"}>
                <li className=" font-bold text-lg pl-2 text-blue">
                  Messages
                </li>
              </Link>
            </div>
            <div className="flex pl-4 hover:bg-textHover ">
              <img src={assets.notification} className="w-5 h-5 mt-1" alt="" />
              <Link to={"/dashboard/notifications"}>
                <li className="font-bold text-lg pl-2 text-blue">
                  Notifications
                </li>
              </Link>
            </div>
            <div className="flex pl-4 hover:bg-textHover">
              <img src={assets.library} className="w-5 h-5 mt-1" alt="" />
              <Link to={"/dashboard/library"}>
                <li className="font-bold text-lg pl-2 text-blue">
                  Library
                </li>
              </Link>
            </div>
          </ul>
          <div className="flex pl-4 mt-44 hover:bg-textHover">
            <img src={assets.account} className="w-6 h-6 mt-1" alt="" />
            <Link to={"/dashboard/profile"}>
              <h3 className="font-bold text-xl pl-2  text-blue">Profile</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
