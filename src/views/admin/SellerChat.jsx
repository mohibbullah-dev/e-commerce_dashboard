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

const SellerChat = () => {
  const [selectedSeller, setSelectedSeller] = useState(conversations[0]);
  const [showSellerList, setShowSellerList] = useState(true);
  const [showSellerInfo, setShowSellerInfo] = useState(false);

  const handleSellerSelect = (seller) => {
    setSelectedSeller(seller);

    if (window.innerWidth < 1024) {
      setShowSellerList(false);
      setShowSellerInfo(false);
    }
  };

  useEffect(() => {
    function resizeHandler() {
      if (window.innerWidth < 1024) {
        setShowSellerList(false);
        setShowSellerInfo(false);
      } else {
        setShowSellerList(true);
        setShowSellerInfo(true);
      }
    }

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

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
        {/* right side  */}
        <aside
          className={`${showSellerList ? "flex flex-col" : "hidden"} border-r border-slate-200 w-full lg:flex lg:w-[310px] xl:w-[340px] shrink-0 `}
        >
          {/* header start  */}
          <div className="flex flex-col gap-3 p-4 sticky">
            <div className="flex item-center justify-between">
              <div>
                <h2 className="text-slate-900 font-bold">Seller Message</h2>
                <p className="text-sm text-slate-500">
                  Manage seller conversations
                </p>
              </div>
              <span>
                <MdMoreVert className="text-slate-500" size={17} />
              </span>
            </div>
            <div className="relative ">
              <CiSearch
                size={17}
                className=" absolute text-slate-900 left-3 top-1/2 -translate-y-1/2 "
              />
              <input
                type="text"
                placeholder="Search seller..."
                className="text-sm py-2.5 pr-3 pl-10 w-full outline-none  rounded-xl border border-slate-200 focus:border-slate-400 focus:bg-white"
              />
            </div>

            <div className="flex space-x-4">
              <button className="text-sm bg-slate-900 py-1.5 px-3.5 rounded-md text-white">
                All
              </button>
              <button className="text-sm  py-1.5 px-3.5 rounded-md text-slate-900">
                Unread
              </button>
              <button className="text-sm  py-1.5 px-3.5 rounded-md text-slate-900">
                Archived
              </button>
            </div>
          </div>
          <div className="h-[1px] bg-slate-200 w-full mx-auto my-4" />

          {/* conversation list start  */}

          <VirtualList
            style={{ minWidth: "340px", height: "700px" }}
            rowComponent={SellerChatConversationRow}
            rowCount={conversations.length}
            rowHeight={80}
            rowProps={{ conversations, handleSellerSelect, selectedSeller }}
          />
        </aside>

        {/* center chat pannel  */}

        <section
          className={`${!showSellerList ? "flex " : "hidden"}  lg:flex flex-1 flex-col min-w-0 bg-slate-50`}
        >
          {/* header  */}

          <div className="flex items-center justify-between py-3 px-4 bg-white border-b border-slate-200">
            {" "}
            <div className=" flex items-center justify-center space-x-4">
              <button
                onClick={() => setShowSellerList(true)}
                className="lg:flex text-slate-500 rounded-3xl hover:bg-slate-100 cursor-pointer p-2"
              >
                <BiArrowBack size={19} className="" />
              </button>
              <div className="relative shrink-0">
                <img
                  className="w-10 h-10 object-cover"
                  src="http://localhost:5173/src/assets/profile_placeholder.png"
                  alt=""
                />
                {selectedSeller.online && (
                  <span className="absolute bottom-0 right-0 border-2 border-white bg-emerald-500 rounded-full w-3 h-3"></span>
                )}
              </div>
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  {selectedSeller.storeName}
                </h2>
                <p className="flex items-center justify-center text-xs text-slate-500 ">
                  {selectedSeller.online ? "Online" : "Offline"}
                  <span>
                    <LuDot />
                  </span>
                  <span>{selectedSeller.sellerName}</span>
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
              <button
                onClick={() => setShowSellerInfo(true)}
                className="text-slate-500 p-2 rounded-full flex lg:hidden hover:bg-slate-100 cursor-pointer"
              >
                <IoStorefrontOutline size={19} />
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

        {/* right side  */}
        <aside
          className={`${showSellerInfo ? "fixed inset-y-0 flex bg-white flex-col right-0 z-50 w-[320px]" : "hidden"} flex-col  overflow-y-auto lg:static lg:flex lg:w-[300px] xl:w-[330px] shrink-0 border-1 border-slate-200  `}
        >
          {/* header  */}

          <div className="flex items-center justify-between w-full min-h-[60px] px-2 border-b sticky border-slate-200">
            <h2 className="text-sm font-semibold text-slate-900">
              Seller Details
            </h2>
            <span
              onClick={() => setShowSellerInfo(false)}
              className="text-slate-500 p-2 flex lg:hidden rounded-2xl hover:bg-slate-100 cursor-pointer"
            >
              {<IoMdClose size={19} />}
            </span>
          </div>

          {/* profle  */}
          <div className="flex flex-col items-center w-full h-[200px] py-4 border-b border-slate-200">
            <div className="relative w-[80px] h-[80px] flex items-center justify-center rounded-full bg-slate-900 text-white border-2 border-slate-200 text-lg font-semibold">
              {letterAvaterGenerator(selectedSeller.storeName)}
              {selectedSeller && (
                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white bg-emerald-500"></span>
              )}
            </div>
            <div className="flex flex-col justify-center  items-center">
              <h2 className="text-lg font-semibold text-slate-900">
                {selectedSeller.storeName}
              </h2>
              <p className="text-sm text-slate-500 ">
                {" "}
                {selectedSeller.sellerName}
              </p>
              <p className="text-sm text-slate-500 "> Seller ID: #SL1024</p>
            </div>
          </div>

          {/* overflow  */}
          <div className=" px-3 py-4 space-y-3 border-b border-slate-200">
            <h2 className="text-lg text-slate-500 text-start">
              Store Overview
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center justify-center gap-2 text-slate-700">
                <CiStar size={18} className="text-orange-500" /> Rating
              </span>{" "}
              <span className="text-sm font-semibold ">4.8</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center justify-center gap-2 text-slate-700">
                <FaShoppingBag size={16} className="text-slate-500" /> Orders
              </span>{" "}
              <span className="text-sm font-semibold ">1,248</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center justify-center gap-2 text-slate-700">
                <FiPackage size={18} className="text-slate-500" /> Products
              </span>{" "}
              <span className="text-sm font-semibold ">342</span>
            </div>
          </div>

          {/* recent orders */}

          <div className="flex flex-col px-3 py-4 space-y-3 border-b border-slate-200">
            <div className=" flex items-center justify-between">
              <h2 className="text-lg text-slate-500 text-start">
                Recent Orders
              </h2>{" "}
              <p className="text-sm font-semibold text-slate-900 p-1.5 rounded-md hover:bg-slate-100 cursor-pointer transition-all">
                View all
              </p>{" "}
            </div>

            <div className="px-3 py-1 border border-slate-200 rounded-xl">
              <div className=" flex items-center justify-between ">
                <h2 className="text-sm font-semibold text-slate-900 text-start">
                  #ORD-10231
                </h2>{" "}
                <p className="text-xs font-semibold text-slate-900 p-1.5 rounded-md hover:bg-slate-100 cursor-pointer transition-all">
                  $120.00
                </p>{" "}
              </div>
              <p className="text-slate-500 text-xs text-start">Delivered</p>
            </div>
            <div className="px-3 py-1 border border-slate-200 rounded-xl">
              <div className=" flex items-center justify-between ">
                <h2 className="text-sm font-semibold text-slate-900 text-start">
                  #ORD-10231
                </h2>{" "}
                <p className="text-xs font-semibold text-slate-900 p-1.5 rounded-md hover:bg-slate-100 cursor-pointer transition-all">
                  $120.00
                </p>{" "}
              </div>
              <p className="text-slate-500 text-xs text-start">Delivered</p>
            </div>
            <div className="px-3 py-1 border border-slate-200 rounded-xl">
              <div className=" flex items-center justify-between ">
                <h2 className="text-sm font-semibold text-slate-900 text-start">
                  #ORD-10231
                </h2>{" "}
                <p className="text-xs font-semibold text-slate-900 p-1.5 rounded-md hover:bg-slate-100 cursor-pointer transition-all">
                  $120.00
                </p>{" "}
              </div>
              <p className="text-slate-500 text-xs text-start">Delivered</p>
            </div>
          </div>

          <div className=" px-3 py-4 space-y-3 border-b border-slate-200">
            <h2 className="text-lg text-slate-500 text-start">
              Store Overview
            </h2>
            <div className="flex items-center justify-between border border-slate-200 rounded-xl px-3 py-3 ">
              <span className="text-sm flex items-center justify-center gap-2 text-slate-700 font-semibold">
                <FaStore size={18} className="text-slate-500" /> View Store
              </span>{" "}
            </div>

            <div className="flex items-center justify-between border border-slate-200 rounded-xl px-3 py-3 ">
              <span className="text-sm flex items-center justify-center gap-2 text-slate-700 font-semibold">
                <FiPackage size={18} className="text-slate-500" /> View Orders
              </span>{" "}
            </div>

            <div className="flex items-center justify-between border border-slate-200 rounded-xl px-3 py-3 ">
              <span className="text-sm flex items-center justify-center gap-2 text-slate-700 font-semibold">
                <FaShoppingBag size={18} className="text-slate-500" /> View
                products
              </span>{" "}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SellerChat;
