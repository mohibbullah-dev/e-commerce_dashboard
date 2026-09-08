import React from "react";
import { FaRegImages } from "react-icons/fa";

const CategoryModel = () => {
  return (
    <div className="bg-gray-500 p-4 rounded-md w-full">
      <h2 className="text-center text-gray-100 text-xl font-semibold">
        Add Category
      </h2>
      <div className="flex flex-col w-full gap-1 mb-3">
        <label htmlFor="category_name" className="text-gray-200 ">
          Catergory name
        </label>
        <input
          className="px-3 py-2 outline-none border border-gray-400 bg-transparent rounded-md placeholder-gray-400"
          type="text"
          name="category_name"
          id="category_name"
          placeholder="category"
          required
        />
      </div>

      <div className="flex items-center justify-center w-full h-[250px] mb-3">
        <label
          htmlFor="category_image"
          className="flex flex-col items-center justify-center w-full h-full border-2 border-dashed border-gray-400 hover:border-gray-700 bg-[#283046]/20 transition-colors rounded-md cursor-pointer text-[#d0d2d6]"
        >
          <div className="text-4xl mb-3">
            <FaRegImages />
          </div>
          <span className="text-sm font-medium">Click to upload image</span>

          <input
            type="file"
            name="category_name"
            id="category_image"
            className="hidden"
            required
          />
        </label>
      </div>

      <div className="bg-amber-500 text-center rounded-md py-1 px-2 font-semibold hover:bg-amber-700 cursor-pointer">
        <button>Add category</button>
      </div>
    </div>
  );
};

export default CategoryModel;
