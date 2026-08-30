import { CgMenuOreos } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";

import profile_placeholder from "../assets/profile_placeholder.png";
import { useState } from "react";
const Header = ({ isSidebarOpen, setIsSiderbarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between items-center bg-gray-500 h-[80px] m-2 rounded-md">
        <div className="flex items-center">
          <CgMenuOreos
            onClick={() => setIsSiderbarOpen(!isSidebarOpen)}
            className={`m-5 block md:hidden text-white`}
            size={24}
          />
          <div className="flex h-[40px] w-full max-w-[384px]  mx-4 rounded-md">
            {/* <IoIosSearch size={24} /> */}
            <input
              className="outline-none w-full focus:border-sky-400 placeholder-teal-600 bg-white focus:right-2 focus:ring-emerald-700 border border-mauve-600 rounded-md px-2"
              placeholder="Search..."
              type="text"
            />
          </div>
        </div>
        <div>
          <div className=" relative flex gap-1 items-center justify-center">
            <div className="hidden md:flex flex-col">
              {" "}
              <p className="text-white font-black text-md">
                MD.Mohibbullah
              </p>{" "}
              <p className="text-gray-200 font-semibold text-sm">admin</p>
            </div>
            <div
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-[50px] h-[50px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px] border-2 border-gray-400 cursor-pointer rounded-full p-2 mx-2"
            >
              <img
                className="object-cover"
                src={profile_placeholder}
                alt="profile_avater"
              />
            </div>
            {isProfileOpen && (
              <div className="absolute md:hidden items-center rounded-b-md -translate-y-2 top-[70px] right-0 w-[150px] bg-gray-500 shadow-sm px-2 py-2 transition-all">
                <div>
                  <p className="text-white font-bold text-md">MD.Mohibbullah</p>{" "}
                  <p className="text-gray-200 font-semibold text-sm">admin</p>
                </div>
                <div className="h-[1px] w-[120px] bg-gray-400 my-2"></div>
                <ul className="flex flex-col ">
                  <li className="gap-2 hover:bg-gray-100 hover:text-gray-900  text-white rounded-sm flex items-center cursor-pointer">
                    <CgProfile /> Profile
                  </li>
                  <li className="gap-2 hover:bg-gray-100 hover:text-gray-900  text-white rounded-sm flex items-center cursor-pointer">
                    <CiSettings /> Setting
                  </li>
                  <li className=" gap-2 hover:bg-gray-100 hover:text-gray-900  text-white rounded-sm flex items-center cursor-pointer">
                    <IoMdLogOut /> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
