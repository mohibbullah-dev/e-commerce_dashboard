import React, { useEffect, useState } from "react";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
const Paginations = ({
  currentPage,
  totalItems,
  itemPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemPerPage);

  const [windowSize, setWindowSize] = useState(7);
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 640) {
        setWindowSize(4);
      } else {
        setWindowSize(7);
      }
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  if (totalPages <= 1) return null;

  const baseBtn =
    "w-[35px] h-[35px] flex justify-center items-center rounded-md border transition-colors";
  const normalBtn =
    "cursor-pointer hover:bg-slate-700 text-[#d0d2d6] bg-[#283046] border-slate-700";
  const disableBtn =
    "opacity-50 cursor-not-allowed bg-slate-800 text-gray-500 border-slate-700";
  const acitveBtn = "bg-[#6a5fdf] border-[#6a5fdf] text-white shadow-sm";

  const getVisiblePages = () => {
    const half = Math.floor(windowSize / 3);

    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + (windowSize - 1));
    start = Math.max(1, end - windowSize + 1);

    const pages = [];

    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center gap-1 my-4">
      <button
        onClick={() => onPageChange(1)}
        disabled={totalPages === 1}
        className={`${baseBtn} ${currentPage === 1 ? disableBtn : normalBtn}`}
      >
        <RiArrowLeftDoubleFill />
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={totalPages === 1}
        className={`${baseBtn} ${currentPage === 1 ? disableBtn : normalBtn}`}
      >
        <RiArrowDropLeftLine />
      </button>

      {visiblePages[0] > 1 && (
        <span className="text-[#d0d2d6] px-1 select-none">...</span>
      )}
      {visiblePages.map((page, i) => (
        <button
          onClick={() => onPageChange(page)}
          key={i}
          className={`${baseBtn} ${page === currentPage ? acitveBtn : normalBtn}`}
        >
          {page}
        </button>
      ))}

      {totalPages > visiblePages[visiblePages.length - 1] && (
        <span className="text-[#d0d2d6] px-1 select-none">...</span>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`${baseBtn} ${currentPage === totalPages ? disableBtn : normalBtn} px-2 py-1 `}
      >
        <RiArrowDropRightLine />
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        className={`${baseBtn} ${currentPage === totalPages ? disableBtn : normalBtn} px-2 py-1 `}
      >
        <RiArrowRightDoubleLine />
      </button>
    </div>
  );
};

export default Paginations;
