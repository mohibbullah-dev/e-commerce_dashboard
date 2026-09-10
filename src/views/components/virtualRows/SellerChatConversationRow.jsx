import React from "react";

const SellerChatConversationRow = ({
  index,
  style,
  conversations,
  handleSellerSelect,
  selectedSeller,
}) => {
  const seller = conversations[index];
  const isActive = selectedSeller.id === seller.id;

  return (
    <div className="flex flex-col overflow-y-auto">
      <button
        onClick={() => handleSellerSelect(seller)}
        style={style}
        className={`${isActive ? "bg-slate-100" : "hover:bg-slate-50"} transition cursor-pointer flex item-center w-full border-b border-slate-200 p-4 gap-2`}
      >
        <div className="relative shrink-0">
          <img
            className="w-11 h-11"
            src="http://localhost:5173/src/assets/profile_placeholder.png"
            alt=""
          />

          {seller.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 border-2 object-cover border-white rounded-full bg-emerald-500" />
          )}
        </div>
        <div className="flex flex-1 flex-col justify-around">
          <div className=" flex items-center justify-between">
            <h2 className="text-md font-semibold text-slate-900 truncate">
              {seller.storeName}
            </h2>
            <p className="text-xs text-slate-500 shrink-0">
              {seller.time}
            </p>{" "}
          </div>

          <div className="flex item-center justify-between">
            {" "}
            <p className="text-xs text-slate-500 truncate">
              {seller.lastMessage}
            </p>
            {seller.unread > 0 && (
              <span className="w-5 h-5 bg-slate-900 flex items-center justify-center rounded-full text-[10px] font-semibold text-white">
                {seller.unread}
              </span>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default SellerChatConversationRow;
