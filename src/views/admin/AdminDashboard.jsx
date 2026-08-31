import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Chart from "react-apexcharts";
const AdminDashboard = () => {
  const state = {
    series: [
      { name: "Orders", data: [23, 45, 67, 89, 90, 23, 54, 65, 89, 45] },
      { name: "Revenue", data: [39, 59, 60, 30, 49, 50, 23, 52, 67, 87, 45] },
      { name: "Sllers", data: [23, 54, 67, 87, 45, 23, 54, 60, 87, 42] },
    ],
    options: {
      color: ["181ee8", "181ee8"],
      plotOptionsL: {
        radius: 30,
      },
      chart: {
        background: "#364153",
        foreColor: "#D0d4dc",
      },
      dataLabels: {
        enabled: false,
      },
      strock: {
        show: true,
        curve: ["smooth", "straigth", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: ".5",
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Fab",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: { position: "top" },
    },
  };

  return (
    <div className="p-2 m-2 bg-gray-100 flex flex-col inset-0 rounded-sm">
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

      <div className=" mt-4 w-full flex">
        {/* chart */}

        <div className="w-3/5 rounded-md">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>

        <div className="w-2/5 ">fff</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
