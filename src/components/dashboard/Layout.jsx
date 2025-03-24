import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <div className="flex h-screen ">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Page Content */}
          <Header />
          <div className="pl-8 pt-16">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
