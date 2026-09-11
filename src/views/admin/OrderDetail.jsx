import React from "react";

const OrderDetail = () => {
  return (
    <div className="bg-[#6b75e1] p-6 mx-2 rounded-md text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Order Details</h2>
        <select
          name="status"
          className="bg-slate-700 px-4 py-2 rounded-md outline-none border border-slate-600 text-sm cursor-pointer"
        >
          <option value="pending">pending</option>
          <option value="processing">processing</option>
          <option value="delivered">delivered</option>
          <option value="cancelled">cancelled</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-base font-medium">#34344 3 Jan 2024</p>
            <p className="text-base font-medium mt-1">Deliver To : Raju Kahn</p>
          </div>

          <div className="text-sm text-indigo-100 space-y-1">
            <p>Cecilia ChapmanNulla St. Mankato Mississippi</p>
            <p>Payment Status : Paid</p>
            <p>Price : $232</p>
          </div>

          {/* Overall Order Items */}
          <div className="flex flex-col gap-3 mt-4">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/20 p-2 rounded-md w-full lg:w-4/5"
              >
                <img
                  src="http://localhost:5173/src/assets/profile_placeholder.png"
                  alt="Product"
                  className="w-12 h-12 rounded bg-white object-cover"
                />
                <div className="text-sm">
                  <p className="text-indigo-100">Product Name here</p>
                  <p className="text-indigo-200 text-xs mt-1">
                    Brand : EasyQuantity : 3
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 p-5 rounded-md h-max">
          <div className="flex flex-col gap-5">
            {/* Seller 1 */}
            <div>
              <p className="text-sm text-indigo-100 mb-2">
                Seller 1 Order : pending
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="http://localhost:5173/src/assets/profile_placeholder.png"
                  alt="Product"
                  className="w-12 h-12 rounded bg-white object-cover"
                />
                <div className="text-sm">
                  <p className="text-indigo-100">Product Name here</p>
                  <p className="text-indigo-200 text-xs mt-1">
                    Brand : EasyQuantity : 3
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-indigo-100 mb-2">
                Seller 1 Order : pending
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="http://localhost:5173/src/assets/profile_placeholder.png"
                  alt="Product"
                  className="w-12 h-12 rounded bg-white object-cover"
                />
                <div className="text-sm">
                  <p className="text-indigo-100">Product Name here</p>
                  <p className="text-indigo-200 text-xs mt-1">
                    Brand : EasyQuantity : 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
