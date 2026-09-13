import React, { useState } from "react";
import { defaultCategories } from "../../utils/data";
import { MdClear } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";

const AddProduct = () => {
  const [catShow, setCatShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategories, setAllCategories] = useState(defaultCategories);
  const [search, setSearch] = useState("");

  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState("");

  const searchCatHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value) {
      const searchReuslt = defaultCategories.filter((c) =>
        c.name.toLowerCase().includes(value.toLowerCase()),
      );
      setAllCategories(searchReuslt);
    } else {
      setAllCategories(defaultCategories);
    }
  };

  const imagehandler = (e) => {
    const images = Array.from(e.target.files);
    const newImage = images.map((file, i) => ({
      url: URL.createObjectURL(file),
      file: file,
    }));
    setFiles((prev) => [...prev, ...newImage]);
  };

  const replaceImgHandler = (e, i) => {
    console.log("e.target :", e.target.files[0]);

    const file = e.target.files[0];
    const newImage = URL.createObjectURL(file);
    if (newImage) {
      setFiles((prev) =>
        prev.map((item, index) =>
          index === i ? { ...item, url: newImage } : item,
        ),
      );
    }
  };

  const removeImage = (imageId) => {
    setFiles(files.filter((_, i) => i !== imageId));
  };

  return (
    <div className="bg-slate-700 p-2 m-2 rounded-md text-white ">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-semibold">Add Product</h2>
        <button className="bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 rounded-md text-sm font-medium">
          All Product
        </button>
      </div>

      {/* Form Section */}
      <form className="flex flex-col gap-5">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm text-indigo-100" htmlFor="productName">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              placeholder="Product Name"
              className="bg-transparent border border-gray-400 rounded-md text-[#d0d2d6] px-4 py-2.5  outline-none focus:border-white text-sm placeholder:text-indigo-200"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm text-indigo-100" htmlFor="brandName">
              Product Brand
            </label>
            <input
              type="text"
              id="brandName"
              placeholder="Brand Name"
              className="bg-transparent  border border-gray-400 rounded-md text-[#d0d2d6] px-4 py-2.5  outline-none focus:border-white text-sm placeholder:text-indigo-200"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="relative flex flex-col w-full gap-2">
            <label className="text-sm text-indigo-100" htmlFor="category">
              Category
            </label>
            <div className=" relative overflow-visible flex items-center justify-between">
              {" "}
              <input
                className="bg-transparent w-full  border border-gray-400 rounded-md text-[#d0d2d6] px-4 py-2.5  outline-none focus:border-white text-sm placeholder:text-indigo-200"
                value={category}
                onClick={() => {
                  setCatShow(!catShow);
                }}
                readOnly
                type="text"
                placeholder="-- select a category --"
              />
              {category && (
                <span
                  onClick={() => setCategory("")}
                  className="absolute right-2 bottom-1/2 top-1/2  flex items-center cursor-pointer "
                >
                  {" "}
                  <MdClear />
                </span>
              )}
            </div>

            {catShow && (
              <div className="h-[200px] w-full absolute top-full left-0 z-40 overflow-x-auto flex flex-col bg-slate-600 my-0 px-2 py-2 shadow-xs shadow-white rounded-b-md">
                <input
                  onChange={searchCatHandler}
                  value={search}
                  className="border border-slate-200 outline-none focus:border-emerald-500 focus:bg-white rounded-md placeholder-slate-500 w-[40%] py-1.5 px-7 text-slate-950"
                  type="text"
                  placeholder="search category"
                />
                {allCategories.map((c, i) => {
                  return (
                    <div key={i} className="flex flex-col">
                      <span
                        onClick={() => {
                          setCategory(c.name);
                          setSearch("");
                          setCatShow(!catShow);
                        }}
                        className="hover:bg-slate-300 rounded-sm py-1 px-1.5 hover:text-slate-900"
                      >
                        {c.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm text-indigo-100" htmlFor="stock">
              Product Stock
            </label>
            <input
              type="number"
              id="stock"
              placeholder="Stock"
              className="bg-transparent  border border-gray-400 rounded-md text-[#d0d2d6] px-4 py-2.5  outline-none focus:border-white text-sm placeholder:text-indigo-200"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm text-indigo-100" htmlFor="discount">
              Discount
            </label>
            <textarea
              type="text"
              id="discount"
              defaultValue="5"
              placeholder="Write prodcution desciption..."
              className="bg-transparent  border border-gray-400 rounded-md text-[#d0d2d6] px-4 py-2.5  outline-none focus:border-white text-sm placeholder:text-indigo-200"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex w-full flex-wrap items-center gap-2">
          {files.map((image, i) => {
            return (
              <label
                onClick={(e) => e.stopPropagation()}
                htmlFor={`replace-image-${i}`}
                key={i}
                className="relative w-[200px] h-[120px] flex items-center justify-center gap-3 cursor-pointer"
              >
                <img
                  src={image.url}
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />

                <span
                  onClick={(e) => {
                    e.preventDefault();
                    removeImage(i);
                  }}
                  className="absolute top-2 right-2 text-white bg-slate-900 shadow-md p-[2px] rounded-2xl cursor-pointer transition-all hover:scale-105"
                >
                  <MdClear size={20} />
                </span>

                <input
                  onChange={(e) => replaceImgHandler(e, i)}
                  type="file"
                  id={`replace-image-${i}`}
                  className="hidden"
                  accept="image/*"
                />
              </label>
            );
          })}

          <label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center w-[200px] h-[120px]  rounded-md border hover:border-2 border-dashed border-slate-500 transition-all cursor-pointer"
          >
            <span>
              <CiImageOn size={20} />
            </span>
            <span>Select image</span>

            <input
              className="hidden"
              type="file"
              multiple
              onChange={imagehandler}
              accept="image/*"
              id="image-upload"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
