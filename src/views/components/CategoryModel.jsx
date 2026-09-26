import React from "react";
import { FaRegImages } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { BeatLoader } from "react-spinners";

const CategoryModel = ({
  setCategoryName,
  categoryName,
  setCategoryImage,
  categoryImage,
  submitHandler,
  loader,
}) => {
  const constfileHandler = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setCategoryImage(fileUrl);
  };

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
          onChange={(e) => setCategoryName(e.target.value)}
          className="px-3 py-2 outline-none border text-white border-gray-400 bg-transparent rounded-md placeholder-gray-400"
          type="text"
          value={categoryName}
          name="category_name"
          id="category_name"
          placeholder="category"
          required
        />
      </div>

      <div className="flex items-center justify-center w-full h-[250px] mb-3">
        <label
          // onClick={(e) => e.preventDefault()}
          htmlFor="category_image"
          className={`flex flex-col relative items-center justify-center w-full h-full border-2 border-dashed border-gray-400 hover:border-gray-700 bg-[#283046]/20 transition-colors rounded-md cursor-pointer text-[#d0d2d6]`}
        >
          {categoryImage && (
            <span
              onClick={(e) => {
                e.preventDefault();
                setCategoryImage(null);
              }}
              className="absolute top-2 right-2 text-red-600 hover:scale-105 transition-all"
            >
              <IoMdCloseCircle size={20} />
            </span>
          )}
          {categoryImage ? (
            <img
              className="inset-0 w-full h-full object-cover"
              src={categoryImage}
              alt="categoryImage"
            />
          ) : (
            <>
              <div className="text-4xl mb-3">
                <FaRegImages />
              </div>
              <span className="text-sm font-medium">Click to upload image</span>
            </>
          )}

          <input
            onChange={constfileHandler}
            type="file"
            name="category_name"
            id="category_image"
            accept="image/*"
            className="hidden"
            required
          />
        </label>
      </div>

      <div onClick={submitHandler}>
        <button
          disabled={loader ? true : false}
          className={` ${categoryImage && categoryName ? "opacity-100 cursor-pointer" : "opacity-60 cursor-not-allowed"} bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 `}
        >
          {loader ? (
            <BeatLoader
              color="#fff"
              size={"8px"}
              cssOverride={{ textAlign: "center" }}
            />
          ) : (
            "Add category"
          )}
        </button>
      </div>
    </div>
  );
};

export default CategoryModel;
