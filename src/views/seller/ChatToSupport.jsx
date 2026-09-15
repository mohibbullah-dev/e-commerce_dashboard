import React, { useEffect, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { conversations, messages } from "../../utils/data";
import { BiArrowBack } from "react-icons/bi";
import { LuAArrowDown, LuDot } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { LuVideo } from "react-icons/lu";
import { IoStorefrontOutline } from "react-icons/io5";
import { GrMoreVertical } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { FaStore } from "react-icons/fa6";
import { GoPaperclip } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { MdOutlineMoodBad } from "react-icons/md";
import VirtualList from "../components/VirtualList/VirtualList";
import SellerChatConversationRow from "../components/virtualRows/SellerChatConversationRow";
import MessageRow from "../components/virtualRows/MessageRow";

const ChatToSupport = () => {
  const letterAvaterGenerator = (name) => {
    return name
      .split(" ")
      .map((name, i) => name.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <div className="bg-white">
      <div className="flex h-[calc(100vh-110px)] min-h-[600px] border-2 border-slate-200 rounded-md">
        {/* center chat pannel  */}

        <section className={`flex lg:flex flex-1 flex-col min-w-0 bg-slate-50`}>
          {/* header  */}

          <div className="flex items-center justify-between py-3 px-4 bg-white border-b border-slate-200">
            {" "}
            <div className=" flex items-center justify-center space-x-4">
              <button
                onClick={() => setShowSellerList(true)}
                className="flex lg:hidden text-slate-500 rounded-3xl hover:bg-slate-100 cursor-pointer p-2"
              >
                <BiArrowBack size={19} className="" />
              </button>
              <div className="relative shrink-0">
                <img
                  className="w-10 h-10 object-cover"
                  src={
                    "http://localhost:5173/src/assets/profile_placeholder.png" ||
                    letterAvaterGenerator()
                  }
                  alt=""
                />

                <span className="absolute bottom-0 right-0 border-2 border-white bg-emerald-500 rounded-full w-3 h-3"></span>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Hello Mart's
                </h2>
                <p className="flex items-center justify-center text-xs text-slate-500 ">
                  Online
                  <span>
                    <LuDot />
                  </span>
                  <span>Jhon</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <button className="text-slate-500 p-2 rounded-full hover:bg-slate-100 cursor-pointer">
                <MdOutlinePhone size={19} />
              </button>

              <button className="text-slate-500 p-2 rounded-full hover:bg-slate-100 cursor-pointer">
                <LuVideo size={19} />
              </button>

              <button className="text-slate-500 p-2 rounded-full hover:bg-slate-100 cursor-pointer">
                <GrMoreVertical size={19} />
              </button>
            </div>
          </div>

          {/* Message Area */}

          <div className="flex flex-1 flex-col w-full max-h-[80vh] overflow-y-hidden lg:h-[70vh]  py-5 bg-slate-50 px-1 md:px-3 lg:px-4 space-y-2">
            <div className="flex items-center justify-center ">
              <p className="text-slate-700 text-xs font-semibold bg-white py-1.5 px-2 rounded-2xl border-2 border-slate-100">
                Today
              </p>
            </div>

            <VirtualList
              rowComponent={MessageRow}
              rowCount={messages.length}
              rowHeight={100}
              rowProps={{ messages }}
            />
          </div>

          {/* Message Composer  */}

          <div className="flex items-center justify-between mx-auto w-full gap-2  lg:mb-4 px-3 pb-4 sticky z-50">
            <span className=" flex items-center p-3 justify-center hover:bg-slate-200 transition-all rounded-2xl w-[50px] text-slate-500 cursor-pointer">
              <GoPaperclip size={19} />
            </span>
            <div className="relative w-full flex-1">
              <input
                placeholder="Write a message..."
                type="text"
                className="w-full outline-none border border-slate-200 rounded-lg py-3 px-4 focus:border-slate-500 focus:bg-white"
              />
              <span className="absolute top-1/2 right-2 -translate-y-1/2 p-1.5 hover:bg-slate-200 rounded-xl cursor-pointer transition-all">
                <MdOutlineMoodBad size={20} />
              </span>
            </div>

            <span className="w-[60px] cursor-pointer hover:bg-slate-900 transition-all text-slate-100 bg-slate-700 flex items-center justify-center py-3 px-1 rounded-lg">
              <IoMdSend size={19} />
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChatToSupport;
