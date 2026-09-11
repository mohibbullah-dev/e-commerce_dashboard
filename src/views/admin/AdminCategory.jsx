import React, { useRef, useState } from "react";
import profile_placeholder from "../../assets/profile_placeholder.png";
import Paginations from "../components/Paginations";
import { BiEditAlt, BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaRegImages } from "react-icons/fa";
import CategoryModel from "../components/CategoryModel";
import { AiFillCloseSquare } from "react-icons/ai";
import Draggable from "react-draggable";

const AdminCategory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const windowSize = 7;
  const totalItems = 2000;
  const itemPerPage = 10;
  const [showCatModel, setShowCatModel] = useState(false);
  const nodeRef = useRef(null);

  const inputHandler = () => {};

  return (
    <div className="p-0 lg:p-2 m-1 lg:m-2 bg-gray-100 flex  flex-col inset-0 rounded-sm">
      <div className="flex flex-wrap lg:flex-nowrap gap-1">
        {/* left pannel  */}
        <div className="  bg-gray-500 p-1 lg:p-4 lg:w-7/12 w-12/12 rounded-md flex flex-col h-[90vh] min-h-0 lg:h-[80vh]">
          <div className=" flex justify-between items-center">
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

          <div className=" flex items-center lg:hidden justify-between rounded-md bg-gray-600 p-2 my-4">
            <h2 className="font-semibold text-gray-100 text-lg lg:text-xl">
              Category
            </h2>
            <button
              onClick={() => setShowCatModel(!showCatModel)}
              className="py-1 cursor-pointer px-2 rounded-md bg-gray-300 hover:bg-white text-gray-700  text-sm lg:text-lg"
            >
              Add category
            </button>
          </div>
          <div className="mt-3 overflow-auto rounded-md flex-1 min-h-0">
            <table className="w-full rounded-md text-sm text-[#d0d2d6] uppercase ">
              <thead className=" bg-slate-700 border-b border-slate-700 text-left sticky top-0 z-10">
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
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                  (m, i) => (
                    <tr key={i}>
                      <td
                        scope="row"
                        className="py-4 px-6 font-medium whitespace-nowrap"
                      >
                        {i + 1}
                      </td>
                      <td
                        scope="row"
                        className=" rounded-md w-[40px] h-[40px] font-medium whitespace-nowrap"
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
                        Pending
                      </td>
                      <td
                        scope="row"
                        className="py-4 px-6 flex items-center justify-start gap-3 font-medium whitespace-nowrap"
                      >
                        <span className="bg-gray-700 p-2 rounded-md text-gray-100 hover:text-emerald-500 cursor-pointer ">
                          <BiEditAlt />
                        </span>
                        <span className="bg-gray-700 p-2 rounded-md text-gray-100 hover:text-red-600 cursor-pointer">
                          <MdDelete />
                        </span>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
          <Draggable nodeRef={nodeRef}>
            <div
              ref={nodeRef}
              className="fixed bottom-0 left-1/2 -translate-x-1/2 lg:sticky lg:translate-x-1/30  z-[9999] cursor-move touch-none rounded-xl "
            >
              <Paginations
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                windowSize={windowSize}
                totalItems={totalItems}
                itemPerPage={itemPerPage}
              />
            </div>
          </Draggable>
        </div>

        {/* right pannel  */}
        <div className="hidden lg:block w-5/12">
          <CategoryModel />
        </div>
        {showCatModel && (
          <div
            onClick={() => setShowCatModel(!showCatModel)}
            className=" fixed flex items-center justify-center inset-0 top-0 bg-black/60 z-50 lg:hidden"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="relative w-[95%]"
            >
              <button
                onClick={() => setShowCatModel(!showCatModel)}
                className="absolute top-4 right-4 cursor-pointer"
              >
                <AiFillCloseSquare size={20} color="white" />
              </button>
              <CategoryModel />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCategory;
