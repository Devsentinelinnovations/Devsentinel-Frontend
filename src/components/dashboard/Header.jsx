import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="ml-4 mr-8 mt-4 bg-white rounded-lg">
        <nav className="flex justify-between px-8">
          <div>
            <img src={assets.logo} alt="logo" className="w-25 h-15" />
          </div>
          <div className="flex space-x-14">
            <div className="flex items-center mr-16">
              <img src={assets.account2} className="w-5 h-5 mr-2" />
              <h3 className="text-blue font-bold">Hello,Mike</h3>
            </div>
            <div className="flex space-x-6 items-center mr-8">
              <Link to={"/dashboard/notifications"}> 
                <img
                  src={assets.notification2}
                  alt="notifications"
                  className="w-5 h-5"
                />
              </Link>
              <Link to={"/dashboard/message"}>
                <img src={assets.message2} alt="message" className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
