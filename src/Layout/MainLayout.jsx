import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const MainLayout = () => {
  const [isSidebarOpen, setIsSiderbarOpen] = useState(true);
  console.log("isSidebarOpen", isSidebarOpen);
  return (
    <div className="flex justify-between">
      {isSidebarOpen && (
        <div
          onClick={() => setIsSiderbarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        ></div>
      )}
      <div>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSiderbarOpen={setIsSiderbarOpen}
        />
      </div>
      <div className="w-full lg:w-[calc(100% - 260px)] lg:ml-[260px] lg:flex-1 flex-col justify-between items-center">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSiderbarOpen={setIsSiderbarOpen}
        />
        <main className="h-screen">{<Outlet />}</main>
      </div>
    </div>
  );
};

export default MainLayout;
