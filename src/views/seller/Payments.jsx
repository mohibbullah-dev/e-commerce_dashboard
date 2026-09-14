import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import profile_placeholder from "../../assets/profile_placeholder.png";
import Paginations from "../components/Paginations";
const Payments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 2000;
  const itemPerPage = 10;
  return (
    <div className=" p-2 m-2 bg-gray-100 flex flex-col inset-0 gap-2 rounded-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <div className="flex p-2 rounded-md bg-blue-600 justify-between items-center">
          <div className="flex flex-col">
            <div className="text-2xl flex items-center text-white font-bold text-gray-800">
              <FaDollarSign />
              6000
            </div>
            <p className="text-sm font-semibold text-gray-300">Total Sales</p>
          </div>
          <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-yellow-700 p-2">
            <FaDollarSign size={30} className="text-white" />
          </div>
        </div>
        <div className="flex p-2 rounded-md bg-orange-600 justify-between items-center">
          <div className="flex flex-col">
            <div className="text-2xl flex items-center text-white font-bold text-gray-800">
              50
            </div>
            <p className="text-sm font-semibold text-gray-300">Products</p>
          </div>
          <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-gray-700 p-2">
            <MdProductionQuantityLimits size={30} className="text-white" />
          </div>
        </div>
        <div className="flex p-2 rounded-md bg-gray-400 justify-between items-center">
          <div className="flex flex-col">
            <div className="text-2xl flex items-center text-white font-bold text-gray-800">
              10
            </div>
            <p className="text-sm font-semibold text-gray-300">Sellers</p>
          </div>
          <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-blue-700 p-2">
            <FaUsers size={30} className="text-white" />
          </div>
        </div>
        <div className="flex p-2 rounded-md bg-blue-600 justify-between items-center">
          <div className="flex flex-col">
            <div className="text-2xl flex items-center text-white font-bold text-gray-800">
              50
            </div>
            <p className="text-sm font-semibold text-gray-300">Orders</p>
          </div>
          <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-orange-700 p-2">
            <FaCartPlus size={30} className="text-white" />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Left Panel: Send Request & Pending Request */}
        <div className="bg-[#6b75e1] text-[#d0d2d6] rounded-md p-5">
          <h2 className="text-lg font-semibold text-white mb-4">
            Send Request
          </h2>
          <div className="flex w-full mb-6 gap-3">
            <input
              type="number"
              placeholder="0"
              className="w-full px-4 py-2 bg-transparent border border-slate-400 outline-none focus:border-white rounded-md text-white placeholder-indigo-200"
            />
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-2 rounded-md font-medium shadow-md">
              Submit
            </button>
          </div>

          <h2 className="text-lg font-semibold text-white mb-4">
            Pending Request
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-white/20 text-white">
                <tr>
                  <th className="px-4 py-3 rounded-l-md">No</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 rounded-r-md">Date</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/10 last:border-none"
                  >
                    <td className="px-4 py-2 font-medium">{i + 1}</td>
                    <td className="px-4 py-2">#3434</td>
                    <td className="px-4 py-2">
                      <span className="bg-blue-300/30 text-blue-100 px-2 py-1 rounded-sm text-xs border border-blue-300/30">
                        pending
                      </span>
                    </td>
                    <td className="px-4 py-2">12 Jun 2023</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Paginations
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalItems={totalItems}
            itemPerPage={itemPerPage}
          />
        </div>

        {/* Right Pane */}
        <div className="bg-[#6b75e1] text-[#d0d2d6] rounded-md p-5">
          <h2 className="text-lg font-semibold text-white mb-4">
            Success Withdraw
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-white/20 text-white">
                <tr>
                  <th className="px-4 py-3 rounded-l-md">No</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 rounded-r-md">Date</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/10 last:border-none"
                  >
                    <td className="px-4 py-2 font-medium">{i + 1}</td>
                    <td className="px-4 py-2">#3434</td>
                    <td className="px-4 py-2">
                      <span className="bg-blue-300/30 text-blue-100 px-2 py-1 rounded-sm text-xs border border-blue-300/30">
                        pending
                      </span>
                    </td>
                    <td className="px-4 py-2">12 Jun 2023</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Paginations
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalItems={totalItems}
            itemPerPage={itemPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Payments;
