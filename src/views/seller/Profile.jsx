import React from "react";
import { BiEdit } from "react-icons/bi";

const Profile = () => {
  const userInfo = false;

  return (
    <div className="px-2 lg:px-3 pt-3">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Column: Profile Information */}
        <div className="bg-[#6b75e1] rounded-md p-6">
          {/* Profile Image */}
          <div className="flex justify-center items-center mb-6">
            <label
              htmlFor="profile_image"
              className="cursor-pointer flex justify-center items-center w-[200px] h-[200px] overflow-hidden rounded-md border-2 border-dashed border-white/50 hover:border-white transition-all"
            >
              <img
                src="http://localhost:5173/src/assets/profile_placeholder.png" // এখানে আপনার আসল ইমেজের পাথ দিন
                alt="profile"
                className="w-full h-full object-cover"
              />
            </label>
            <input type="file" id="profile_image" className="hidden" />
          </div>

          {/* Info Box 1: Personal Details */}
          <div className="bg-slate-800 rounded-md p-5 text-[#d0d2d6] relative mb-5">
            <span className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600 transition-colors p-1.5 rounded text-white cursor-pointer">
              <BiEdit size={18} />
            </span>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex gap-2">
                <span className="font-semibold w-[130px]">Name</span>
                <span>: Ariyan Khan</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold w-[130px]">Email</span>
                <span>: ariyan@gmail.com</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold w-[130px]">Role</span>
                <span>: Seller</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold w-[130px]">Status</span>
                <span>: Active</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="font-semibold w-[130px]">Payment Account</span>
                <span className="flex gap-1 items-center">
                  :{" "}
                  <span className="bg-green-500 text-white px-2 py-0.5 rounded-sm text-xs ml-1">
                    Pending
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Info Box 2: Shop Details */}
          {userInfo ? (
            <div className="bg-slate-800 rounded-md p-5 text-[#d0d2d6] relative">
              <span className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600 transition-colors p-1.5 rounded text-white cursor-pointer">
                <BiEdit size={18} />
              </span>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex gap-2">
                  <span className="font-semibold w-[130px]">Shop Name</span>
                  <span>: Easy Shop</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-[130px]">Division</span>
                  <span>: Dhaka</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-[130px]">District</span>
                  <span>: Rajbari</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-[130px]">Sub District</span>
                  <span>: Vola</span>
                </div>
              </div>
            </div>
          ) : (
            <form className="flex flex-col gap-4 mt-4 w-full">
              {/* Shop Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="shopName" className="text-sm text-indigo-100">
                  Shop Name
                </label>
                <input
                  type="text"
                  id="shopName"
                  placeholder="Shop Name"
                  className="bg-transparent border border-slate-400 px-4 py-2.5 rounded-md outline-none focus:border-white text-sm text-white placeholder:text-indigo-200"
                />
              </div>

              {/* Division Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="divisionName"
                  className="text-sm text-indigo-100"
                >
                  Division Name
                </label>
                <input
                  type="text"
                  id="divisionName"
                  placeholder="division Name"
                  className="bg-transparent border border-slate-400 px-4 py-2.5 rounded-md outline-none focus:border-white text-sm text-white placeholder:text-indigo-200"
                />
              </div>

              {/* District Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="districtName"
                  className="text-sm text-indigo-100"
                >
                  District Name
                </label>
                <input
                  type="text"
                  id="districtName"
                  placeholder="District Name"
                  className="bg-transparent border border-slate-400 px-4 py-2.5 rounded-md outline-none focus:border-white text-sm text-white placeholder:text-indigo-200"
                />
              </div>

              {/* Sub District Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subDistrictName"
                  className="text-sm text-indigo-100"
                >
                  Sub District Name
                </label>
                <input
                  type="text"
                  id="subDistrictName"
                  placeholder="Sub District Name"
                  className="bg-transparent border border-slate-400 px-4 py-2.5 rounded-md outline-none focus:border-white text-sm text-white placeholder:text-indigo-200"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-2.5 rounded-md font-medium text-sm mt-2 w-max"
              >
                Save Changes
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Change Password */}
        <div className="bg-[#6b75e1] rounded-md p-6 text-white h-max">
          <h2 className="text-lg font-semibold mb-6">Change Password</h2>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm text-indigo-100">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="bg-transparent border border-slate-400 px-4 py-2.5 rounded-md outline-none focus:border-white text-sm placeholder:text-indigo-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="old_password" className="text-sm text-indigo-100">
                Old Password
              </label>
              <input
                type="password"
                id="old_password"
                placeholder="Old Password"
                className="bg-transparent border border-slate-400 px-4 py-2.5 rounded-md outline-none focus:border-white text-sm placeholder:text-indigo-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="new_password" className="text-sm text-indigo-100">
                New Password
              </label>
              <input
                type="password"
                id="new_password"
                placeholder="New Password"
                className="bg-transparent border border-slate-400 px-4 py-2.5 rounded-md outline-none focus:border-white text-sm placeholder:text-indigo-200"
              />
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 transition-colors text-white px-6 py-2.5 rounded-md font-medium text-sm mt-2 w-max"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
