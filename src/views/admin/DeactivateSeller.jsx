import React, { useState } from "react";
import profile_placeholder from "../../assets/profile_placeholder.png";
import Paginations from "../components/Paginations";
import { BiEditAlt, BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaRegImages } from "react-icons/fa";
import CategoryModel from "../components/CategoryModel";
import { AiFillCloseSquare } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const DeactivateSeller = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const windowSize = 7;
  const totalItems = 2000;
  const itemPerPage = 10;

  const inputHandler = () => {};

  return (
    <div className="p-2 m-2 bg-gray-100 flex  flex-col inset-0 rounded-sm">
      <div className="flex flex-wrap lg:flex-nowrap  gap-1">
        <div className="bg-gray-500 p-4 w-full rounded-md">
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

          {/* <div className="flex items-center justify-between rounded-md bg-gray-700/50 p-2 my-4">
            <h2 className="font-semibold text-gray-100 text-xl">Category</h2>
            <button
              onClick={() => setShowCatModel(!showCatModel)}
              className="py-1 cursor-pointer px-2 rounded-md bg-gray-300 hover:bg-white text-gray-700  text text-lg"
            >
              Add category
            </button>
          </div> */}
          <div className="mt-3 rounded-md max-h-[40vh] lg:max-h-[80vh] overflow-auto">
            <table className="w-full text-sm text-[#d0d2d6] uppercase  rounded-md">
              <thead className="bg-slate-700 border-b border-slate-700 text-left sticky top-0">
                <tr className=" ">
                  <th scope="col" className="py-3 px-4 whitespace-nowrap">
                    No
                  </th>
                  <th scope="col" className="py-3 px-4 whitespace-nowrap">
                    Image
                  </th>
                  <th scope="col" className="py-3 px-4 whitespace-nowrap">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-4 whitespace-nowrap">
                    Shop-name
                  </th>

                  <th scope="col" className="py-3 px-4 whitespace-nowrap">
                    Payment status
                  </th>
                  <th scope="col" className="py-3 px-4 whitespace-nowrap">
                    email
                  </th>

                  <th scope="col" className="py-3 px-4 whitespace-nowrap">
                    Division
                  </th>

                  <th scope="col" className="py-3 px-4 whitespace-nowrap">
                    Districk
                  </th>

                  <th scope="col" className="py-3 px-4 whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((m, i) => (
                  <tr className="" key={i}>
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium  whitespace-nowrap"
                    >
                      {i + 1}
                    </td>
                    <td
                      scope="row"
                      className=" rounded-md w-[40px] h-[40px] font-medium  whitespace-nowrap"
                    >
                      <img
                        className="object-contain rounded-md w-full h-full"
                        src={profile_placeholder}
                        alt="category logo"
                      />
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap"
                    >
                      Mohib
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 gap-3 font-medium whitespace-nowrap"
                    >
                      Easy
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 gap-3 font-medium whitespace-nowrap"
                    >
                      Pendding
                    </td>

                    <td
                      scope="row"
                      className="py-4 px-6 gap-3 font-medium whitespace-nowrap"
                    >
                      mohib7@gmail.com
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 gap-3 font-medium whitespace-nowrap"
                    >
                      Division
                    </td>
                    <td
                      scope="row"
                      className="py-4 px-6 gap-3 font-medium whitespace-nowrap"
                    >
                      District
                    </td>

                    <td
                      scope="row"
                      className="py-4 px-6 gap-3 font-medium whitespace-nowrap"
                    >
                      <BsEye
                        color="black"
                        className="bg-gray-300 hover:bg-gray-200 cursor-pointer rounded-md p-1 flex items-center justify-center w-[20px] h-[20px]"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <Paginations
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              windowSize={windowSize}
              totalItems={totalItems}
              itemPerPage={itemPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeactivateSeller;
