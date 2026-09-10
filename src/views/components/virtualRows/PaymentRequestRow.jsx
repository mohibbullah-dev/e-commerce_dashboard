import React from "react";

const PaymentRequestRow = ({ index, style }) => {
  return (
    <div style={style} className="flex text-gray-200 text-sm py-1 px-2 gap-2">
      <div className="w-[25%] p2 whitespace-nowrap mt-1">{index + 1}</div>
      <div className="w-[25%] p2 whitespace-nowrap mt-1">$2000</div>
      <div className="w-[25%] p2 whitespace-nowrap mt-1">
        <span className="bg-gray-600 py-1 px-1 rounded-md">Pandding</span>
      </div>
      <div className="w-[25%] p2 whitespace-nowrap mt-1">04 dec 2026</div>
      <div className="w-[25%] p2 whitespace-nowrap mt-1">
        <span className="bg-gray-600 py-1 px-1 rounded-md cursor-pointer">
          Confirme
        </span>
      </div>
    </div>
  );
};

export default PaymentRequestRow;
