import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import profile_placeholder from "../../assets/profile_placeholder.png";
const AdminDashboard = () => {
  const state = {
    series: [
      { name: "Orders", data: [23, 45, 67, 89, 90, 23, 54, 65, 89, 45] },
      { name: "Revenue", data: [39, 59, 60, 30, 49, 50, 23, 52, 67, 87, 45] },
      { name: "Sllers", data: [23, 54, 67, 87, 45, 23, 54, 60, 87, 42] },
    ],
    options: {
      color: ["#181ee8", "#28c76f", "#ea5455"],
      plotOptions: {
        borderRadius: 2,
        collumnWith: "100%",
      },

      chart: {
        background: "transparent",
        foreColor: "#D0d4dc",
        toolbar: {
          show: true,
          offsetX: -10,
          offsetY: 10,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straigth", "stepline"],
        lineCap: "butt",
        colors: "transparent",
        width: "1",
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
      responsive: [
        {
          breakpoint: 565,
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: 550,
              toolbar: {
                show: true,
              },
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
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

      <div className=" mt-4 w-full lg:flex gap-4">
        {/* chart & seller message*/}

        <div className="w-full lg:w-3/5 rounded-md bg-gray-500">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>

        <div className="w-full lg:w-2/5 mt-4 lg:mt-0 bg-gray-500 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-white">Recent Seller Message</h2>

            <Link className="text-sm hover:text-red-500 bg-blue-500 px-2 py-1 text-white rounded-sm">
              {" "}
              View all
            </Link>
          </div>
          <div className=" flex flex-col gap-2 pt-6 text-white">
            <ol className="relative border-slate-600 ml-4">
              <li className="mb-3 ml-6">
                <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] z-10 bg-blue-400 rounded-full">
                  <img
                    className="w-full rounded-full h-full"
                    src={profile_placeholder}
                    alt=""
                  />
                </div>
                <div
                  onClick={() => console.log("Card Clicked!")}
                  className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm cursor-pointer hover:bg-slate-700 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    {/* Link-এ 'to' প্রপার্টি যুক্ত করতে ভুলবেন না */}
                    <Link
                      to="/admin"
                      className="text-md font-normal hover:text-sky-400"
                    >
                      Admin
                    </Link>
                    <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                      2 day ago
                    </time>
                  </div>
                  <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                    How Are you
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div
        onClick={() => console.log("Recent Orders Clicked!")}
        className="w-full p-4 bg-gray-500 rounded-md mt-6 cursor-pointer hover:brightness-95 transition-all"
      >
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-white pb-3">
            Recent Orders
          </h2>
          {/* Link-এ ক্লিক করলে যেন মেইন ডিভ-এর onClick কল না হয়, সেজন্য e.stopPropagation() */}
          <Link
            to="/orders"
            onClick={(e) => e.stopPropagation()}
            className="font-semibold text-sm text-white hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="relative overflow-x-auto rounded-md">
          <table className="w-full text-sm text-[#d0d2d6] uppercase  rounded-md">
            <thead className="bg-slate-700/50 border-b border-slate-700 text-left">
              <tr className="">
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Price
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Active
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((m, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    #34344
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    $454
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    View
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
