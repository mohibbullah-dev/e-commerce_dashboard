import React from "react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { AllNav } from "../navigation/NavConfig";
import { NavLink } from "react-router-dom";

const SideBar = ({ isSidebarOpen, setIsSiderbarOpen }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const allNavs = AllNav.filter((nav) => nav.role === userInfo?.role);
  console.log("allnavs :", allNavs);
  return (
    <div
      className={`w-[260px] fixed z-50 h-screen bg-gray-700 transition-transform duration-300 
      lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex justify-center">
        <img className="h-[100px] text-center" src={logo} alt="logo" />
      </div>

      <ul>
        {allNavs.map((n, id) => {
          return (
            <li
              className={` hover:bg-gray-600 m-2 hover:text-black rounded-md p-2 mt-2 text-black text-white`}
              key={id}
            >
              <NavLink
                to={n.path}
                className={({ isActive }) => {
                  isActive ? "bg-sky-200 text-red-600" : "bg-amber-300";
                }}
              >
                <div className="flex items-center gap-2">
                  <span>{n.icon}</span> <span>{n.title}</span>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
