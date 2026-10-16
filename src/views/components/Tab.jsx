import React from "react";

const Tab = ({ tabs, searchParams, setSearchParams, activeTab }) => {
  const handleTabChange = (value) => {
    setSearchParams({ tab: value });
  };
  return (
    <div className="p-4">
      {/* ================= Tabs Header ================= */}
      <div className="flex items-center gap-2 border-b border-slate-700 pb-3 mb-6 overflow-x-auto custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
            className={`px-5 py-2 text-sm font-medium rounded-t-md transition-all whitespace-nowrap ${
              activeTab === tab.value
                ? "bg-indigo-500 text-white shadow-[0_-4px_10px_rgba(99,102,241,0.2)]" // Active State
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50" // Inactive State
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;
