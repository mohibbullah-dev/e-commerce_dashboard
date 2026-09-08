import React, { forwardRef } from "react";
import { List } from "react-window";

const handleOnwheel = ({ deltaY }) => {
  console.log("handleOnwheel", deltaY);
};

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnwheel} {...props} />
));

const PaymentRequest = () => {
  const Row = ({ index, style }) => {
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

  return (
    <div className=" lg:px-2 pt-0 ">
      <div className="w-full p-4 bg-gray-500 rounded-md">
        <h2 className="text-xl font-medium pb-5 text-gray-200">
          Withdrawal Request
        </h2>

        <div className="w-full">
          <div className="w-full overflow-x-auto max-h-[70vh]">
            <div className="flex text-gray-200 bg-slate-700 py-1 uppercase text-xs font-bold min-w-[340px] rounded-t-md">
              <div className="w-[25%] p-2"> No </div>
              <div className="w-[25%] p-2"> Amount </div>
              <div className="w-[25%] p-2"> Status </div>
              <div className="w-[25%] p-2"> Date </div>
              <div className="w-[25%] p-2"> Action </div>
            </div>
          </div>
        </div>

        {
          <List
            style={{ minWidth: "340px", height: "700px" }}
            className="List"
            rowComponent={Row}
            rowCount={10000}
            height={350}
            rowHeight={40}
            rowProps={{}}
            outerElementType={outerElementType}
          />
        }
      </div>
    </div>
  );
};

export default PaymentRequest;
