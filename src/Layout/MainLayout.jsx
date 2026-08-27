import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="flex justify-between">
      <div>
        <aside>
          <SideBar />
        </aside>
      </div>
      <div className="flex-1 flex-col justify-between items-center">
        <Header />
        <main className="">{<Outlet />}</main>
      </div>
    </div>
  );
};

export default MainLayout;
