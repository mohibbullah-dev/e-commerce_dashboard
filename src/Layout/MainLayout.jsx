import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      this is MainLayout
      <main>{<Outlet />}</main>
    </div>
  );
};

export default MainLayout;
