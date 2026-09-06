import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import Paginations from "../components/Paginations";

const AdminOrders = () => {
  const [sub_order_show, setSub_order_show] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const windowSize = 7;
  const totalItems = 2000;
  const itemPerPage = 10;

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-gray-500 rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setParPage(parseInt(e.target.value))}
            className="px-4 py-2 hover:border-green-600 outline-none bg-transparent border border-gray-400 rounded-md text-[#d0d2d6]"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <input
            className="px-4 py-2 focus:border-green-600 outline-none bg-transparent border border-gray-400 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="search"
          />
        </div>

        <div className="relative mt-5 overflow-x-auto  px-2">
          <div className="w-full text-sm text-left text-[#d0d2d6] bg-gray-600/40 rounded-md px-2">
            <div className="text-sm text-[#d0d2d6] uppercase border-b-1 border-slate-700">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Order id</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action </div>
                <div className="py-3 w-[8%] font-bold">Sub-orders</div>
              </div>
            </div>
          </div>

          <div className="text-[#d0d2d6] px-2">
            <div
              className={`flex justify-between items-start border-b px-1 border-slate-600/70`}
            >
              <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                #34343
              </div>
              <div className="py-3 w-[13%] font-medium">$654</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">
                <Link>View</Link>
              </div>
              <div
                onClick={() => setSub_order_show(!sub_order_show)}
                className="py-3 w-[8%] font-medium cursor-pointer"
              >
                {" "}
                {sub_order_show ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </div>
            </div>

            {[1, 2, 3, 4].map((item, i) => (
              <div
                key={i}
                className={`flex justify-between items-start bg-gray-400/70 border-b px-1 border-slate-600/70 ${sub_order_show ? "flex" : "hidden"} transition-transform duration-500`}
              >
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$654</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link>View</Link>
                </div>
                <div className="py-3 w-[8%] font-medium cursor-pointer">
                  {sub_order_show ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[#d0d2d6] px-2">
            <div
              className={`flex justify-between items-start border-b px-1 border-slate-600/70`}
            >
              <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                #34343
              </div>
              <div className="py-3 w-[13%] font-medium">$654</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">
                <Link>View</Link>
              </div>
              <div
                onClick={() => setSub_order_show(!sub_order_show)}
                className="py-3 w-[8%] font-medium cursor-pointer"
              >
                {" "}
                {sub_order_show ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </div>
            </div>

            {[1, 2, 3, 4].map((item, i) => (
              <div
                key={i}
                className={`flex justify-between items-start bg-gray-400/70 border-b px-1 border-slate-600/70 ${sub_order_show ? "flex" : "hidden"} transition-transform duration-500`}
              >
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$654</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link>View</Link>
                </div>
                <div className="py-3 w-[8%] font-medium cursor-pointer">
                  {sub_order_show ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Paginations
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          windowSize={windowSize}
          totalItems={totalItems}
          itemPerPage={itemPerPage}
        />
      </div>
    </div>
  );
};

export default AdminOrders;
