import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Layout = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex h-screen ">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}  />
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Page Content */}
          {/* <Header onMenuToggle={handleMenuToggle}  /> */}
          <div className="pl-8 pt-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
