import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import SellerHeader from "./SellerHeader";
import SellerSidebar from "./SellerSidebar";

const SellerLayout = () => {
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
      <div className="z-50">
        <SellerSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSiderbarOpen={setIsSiderbarOpen}
        />
      </div>
      <div className=" w-full md:w-[calc(100% - 260px)] md:ml-[260px] lg:flex-1 flex-col justify-between items-center h-screen">
        <SellerHeader
          isSidebarOpen={isSidebarOpen}
          setIsSiderbarOpen={setIsSiderbarOpen}
        />
        <main className="flex-1 overflow-y-auto">{<Outlet />}</main>
      </div>
    </div>
  );
};

export default SellerLayout;
