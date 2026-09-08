import React from "react";

const SellerDetail = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3"> Seller Details </h1>
      <div className="w-full p-4 bg-gray-700 rounded-md">
        <div className="w-full flex flex-wrap text-[#d0d2d6]">
          <div className="w-full lg:w-3/12  flex justify-center items-center py-3">
            <div>
              <img
                className="w-full h-[230px]"
                src="http://localhost:5173/src/assets/profile_placeholder.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full lg:w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Basic Info</h2>
              </div>

              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-gray-500 rounded-md">
                <div className="flex gap-2 font-bold text-gray-100">
                  <span>Name : </span>
                  <span>Raju Khan </span>
                </div>
                <div className="flex gap-2 font-bold text-gray-100">
                  <span>Email : </span>
                  <span>mohib@gmail.com</span>
                </div>

                <div className="flex gap-2 font-bold text-gray-100">
                  <span>Role : </span>
                  <span>Seller </span>
                </div>

                <div className="flex gap-2 font-bold text-gray-100">
                  <span>Status : </span>
                  <span>Active </span>
                </div>
                <div className="flex gap-2 font-bold text-gray-100">
                  <span>Payment status : </span>
                  <span>Active </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Address</h2>
              </div>

              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-gray-500 rounded-md">
                <div className="flex gap-2 font-bold text-gray-100">
                  <span>Shop-name : </span>
                  <span>Easy shop </span>
                </div>
                <div className="flex gap-2 font-bold text-gray-100">
                  <span>Division : </span>
                  <span>Dhaka</span>
                </div>

                <div className="flex gap-2 font-bold text-gray-100">
                  <span>District : </span>
                  <span>Dhaka </span>
                </div>

                <div className="flex gap-2 font-bold text-gray-100">
                  <span>State : </span>
                  <span>Dhaka </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form>
            <div className="flex gap-4 py-3">
              <select
                className="px-4 py-2 focus:border-white outline-none bg-gray-600 border border-slate-700 rounded-md text-[#d0d2d6]"
                name=""
                id=""
              >
                <option value="">--Select Status--</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
              </select>
              <button className="bg-red-500 w-[170px] hover:shadow-red-500/40 hover:shadow-md text-white cursor-pointer rounded-md px-7 py-2 my-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerDetail;
