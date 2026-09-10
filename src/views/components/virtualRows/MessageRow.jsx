import React from "react";
import { LuCheckCheck } from "react-icons/lu";
const messagesRow = ({ index, style, messages }) => {
  const message = messages[index];

  const isAdmin = message.sender === "admin";
  return (
    <div
      style={style}
      key={message.id}
      className={`flex ${isAdmin ? "justify-end items-end" : "justify-start items-start"} gap-4`}
    >
      <div
        className={`flex max-w-[82%] sm:max-w-[65%] ${isAdmin ? "items-end" : "items-start"} flex-col gap-1 mt-2 `}
      >
        <div
          className={`rounded-2xl px-4 py-3 leading-relaxed text-sm shadow-sm ${isAdmin ? "rounded-bl-md bg-slate-900 text-white" : "rounded-br-md border border-slate-200 bg-white text-slate-700"}`}
        >
          {message.text}
        </div>
        <div className="flex items-center justify-between w-full px-2">
          <span className="text-xs text-slate-500 ">{message.time}</span>{" "}
          {isAdmin && (
            <span className=" text-slate-500">
              <LuCheckCheck size={14} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default messagesRow;
