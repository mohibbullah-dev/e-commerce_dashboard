import React from "react";
import { FiMapPin, FiPhone, FiMail, FiEdit, FiInfo } from "react-icons/fi";
import { FiShoppingBag, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const StoreDetails = ({ store }) => {
  if (!store || Object.keys(store).length === 0) {
    return (
      <div className="m-2">
        <div className="flex flex-col  justify-center items-center h-[70vh] bg-slate-800 rounded-lg border border-slate-700 w-full text-center p-6 shadow-md">
          <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center mb-5 border border-slate-600 shadow-inner">
            <FiShoppingBag className="text-4xl text-blue-400" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">No Store Found</h2>

          <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
            You haven't created a store yet. Please create a store to start
            managing your business, adding products, and receiving orders.
          </p>

          <Link
            to={`/seller/create-store`}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-blue-500/25 active:scale-95"
          >
            <FiPlus className="text-xl" />
            Create a Store
          </Link>
        </div>
      </div>
    );
  }

  const { name, email, status, logo, banner, contact } = store;

  const storeContact = contact?.[0] || {};
  const { phone, address } = storeContact;

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-300";
      case "inactive":
        return "bg-red-100 text-red-700 border-red-300";
      default:
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
    }
  };

  return (
    <div className="w-full bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700">
      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[200px] md:h-[250px] bg-slate-700">
        {banner?.url ? (
          <img
            src={banner.url}
            alt="Store Banner"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            No Banner Uploaded
          </div>
        )}

        {/* Edit Button overlay */}
        <Link
          to={`/seller/edit-store/${store?._id}`}
          className="absolute top-4 right-4 bg-slate-900/60 hover:bg-slate-900/80 text-white px-3 py-1.5 rounded-md flex items-center gap-2 backdrop-blur-sm transition-all text-sm border border-slate-600"
        >
          <FiEdit /> Edit Store
        </Link>
      </div>

      {/* ================= Logo & Title Section ================= */}
      <div className="px-6 pb-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          {/* Logo (Overlapping the banner) */}
          <div className="flex flex-col items-start mt-[-50px] md:mt-[-60px] relative z-10">
            <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-slate-200 rounded-lg border-4 border-slate-800 shadow-md overflow-hidden flex items-center justify-center">
              {logo?.url ? (
                <img
                  src={logo.url}
                  alt="Store Logo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs text-slate-500">No Logo</span>
              )}
            </div>
            <h1 className="mt-3 text-2xl font-bold text-white tracking-wide">
              {name || "Store Name"}
            </h1>
            <p className="text-slate-400 text-sm flex items-center gap-1 mt-1">
              <FiInfo className="text-blue-400" /> Seller ID:{" "}
              {store?.sellerId?.slice(-6) || "N/A"}
            </p>
          </div>

          {/* Status Badge */}
          <div className="mb-2">
            <span
              className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize border shadow-sm ${getStatusColor(
                status,
              )}`}
            >
              {status || "Pending"}
            </span>
          </div>
        </div>

        <hr className="my-6 border-slate-700" />

        {/* ================= Store Details Grid ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="bg-slate-700/50 p-5 rounded-lg border border-slate-700">
            <h2 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-600 pb-2">
              Contact Information
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <FiMail />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Address</p>
                  <p className="font-medium">{email || "N/A"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-300 mt-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Phone Number</p>
                  <p className="font-medium">{phone || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location/Address Information */}
          <div className="bg-slate-700/50 p-5 rounded-lg border border-slate-700">
            <h2 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-600 pb-2">
              Store Location
            </h2>
            <div className="flex gap-3 text-slate-300">
              <div className="w-8 h-8 shrink-0 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center">
                <FiMapPin />
              </div>
              <div className="flex flex-col gap-1 w-full">
                {address ? (
                  <>
                    <p className="font-medium">{address.street}</p>
                    <p className="text-slate-400 text-sm">
                      {address.city}, {address.state} - {address.postalCode}
                    </p>
                    <p className="text-slate-400 text-sm font-semibold mt-1">
                      {address.country}
                    </p>
                  </>
                ) : (
                  <p className="text-slate-400 mt-1">Address not available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
