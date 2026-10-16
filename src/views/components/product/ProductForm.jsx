import React, { useEffect, useState } from "react";
import { defaultCategories } from "../../../utils/data";
import { MdClear } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";
import {
  add_productSingleImage,
  clearMessage,
  createProduct,
  delete_productSingleImage,
  my_product,
  replace_existingProductImage,
  update_product,
} from "../../../store/reducers/productSlice";
import { BeatLoader, FadeLoader } from "react-spinners";
import { get_categories } from "../../../store/reducers/categorySlice";

const ProductForm = ({ initialData }) => {
  const [imageLoader, setImageLoader] = useState(null);
  const [catShow, setCatShow] = useState(false);
  const [prodcutName, setProductName] = useState(initialData?.name || "");
  const [barandName, setbrandName] = useState(initialData?.brand_name || "");
  const [category, setCategory] = useState(
    initialData?.category?.category_name || "",
  );
  const dispatch = useDispatch();
  const [catId, setCatId] = useState(initialData?.category?._id || "");
  const [stock, setStock] = useState(initialData?.stock || 0);
  const [price, setPrice] = useState(initialData?.orginal_price || 0);
  const [discount, setDiscount] = useState(initialData?.discounted_price || 0);
  const [description, setDescription] = useState(
    initialData?.descirption || "",
  );
  const [search, setSearch] = useState("");
  const [exisingImage, setExistingImage] = useState(initialData?.images);
  console.log("exisingImage :", exisingImage);

  const [files, setFiles] = useState([]);

  // tags
  const [tags, setTags] = useState(initialData?.tags || []);
  const [tagInput, setTagInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = tagInput.trim();

      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setTagInput("");
      }
    }

    if (e.key === "Backspace" && !tagInput && tags.length > 0) {
      const newTags = [...tags];
      newTags.pop();
      setTags(newTags);
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, tagsIndex) => tagsIndex !== index));
  };

  // products
  const { productsList, p_loader, successMessage, errorMessage } = useSelector(
    (state) => state.product,
  );

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessage());
      console.log("successMessage :", successMessage);
    }

    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearMessage());

      setCatId("");
      setStock("");
      setPrice(0);
      setDiscount(0);
      setDescription("");
      setSearch("");
      setFiles([]);
      setTags([]);
      setCatShow(false);
      setProductName("");
      setbrandName("");
      setCategory("");
    }
  }, [errorMessage, successMessage, dispatch]);

  // get categories

  const { categoryList, loader } = useSelector((state) => state.category);
  console.log("categoryList :", categoryList);

  useEffect(() => {
    dispatch(get_categories());
  }, [catShow, dispatch]);

  // search handler
  const searchCatHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value) {
      const searchReuslt = defaultCategories.filter((c) =>
        c.name.toLowerCase().includes(value.toLowerCase()),
      );
      // setAllCategories(searchReuslt);
    } else {
      // setAllCategories(defaultCategories);
    }
  };

  // image handlers
  const imagehandler = (e) => {
    const images = Array.from(e.target.files);
    const newImage = images.map((file, i) => ({
      url: URL.createObjectURL(file),
      file: file,
    }));
    setFiles((prev) => [...prev, ...newImage]);
  };

  const replaceImgHandler = (e, i) => {
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

  // sumit handler
  const submitProduct = (e) => {
    e.preventDefault();

    // validation

    if (!prodcutName.trim()) return toast.error("product_name is required!");

    if (!barandName.trim()) return toast.error("brand_name is required!");

    if (!category.trim()) return toast.error("category is required!");
    if (price <= 0) return toast.error("price is required!");
    if (stock <= 0) return toast.error("stock is required!");
    if (discount <= 0) return toast.error("discount is required!");
    if (!description.trim()) return toast.error("Description is required!");

    const formData = new FormData();

    formData.append("name", prodcutName);
    formData.append("brand_name", barandName);
    formData.append("descirption", description);
    formData.append("category", catId);
    formData.append("orginal_price", price);
    formData.append("discounted_price", discount);
    formData.append("stock", stock);
    tags.forEach((t, _) => formData.append("tags", t));

    if (initialData) {
      dispatch(update_product({ id: initialData?._id, formData }));
    } else {
      if (files.length === 0)
        return toast.error("please provide at least one image");
      files.forEach((f, _) => formData.append("images", f.file));

      dispatch(createProduct(formData));
    }
  };

  const addProductSingleImage = async (e) => {
    const file = e.target?.files[0];

    try {
      if (file) {
        setImageLoader("new");

        const formData = new FormData();
        formData.append("image", file);
        const response = await dispatch(
          add_productSingleImage({ productId: initialData?._id, formData }),
        ).unwrap();
        if (!response) return toast.success("failed to add product_image");

        setExistingImage(response?.data?.images);

        toast.success("image added successfully");
      }
    } catch (error) {
      toast.error(error.message || "failed to create images successfully");
    } finally {
      setImageLoader(null);
    }
  };

  const remove_productSingleImage = async (imagePublicId) => {
    if (!imagePublicId) return toast.error("image_public_id is required");

    try {
      setImageLoader(imagePublicId);
      await dispatch(
        delete_productSingleImage({
          productId: initialData?._id,
          imagePublicId,
        }),
      ).unwrap();

      const updatedImages = exisingImage.filter(
        (img) => img.public_id !== imagePublicId,
      );
      setExistingImage(updatedImages);

      toast.success("image removed successfully");
    } catch (error) {
      toast.error(error.meesage || "failed to remove image");
    } finally {
      setImageLoader(null);
    }
  };

  const replaceExitingProductImage = async (e, oldImagePublic_id) => {
    console.log("i am in replaceExitingProductImage function");

    const file = e.target?.files[0];

    try {
      if (file) {
        setImageLoader(oldImagePublic_id);
        const formData = new FormData();
        formData.append("image", file);
        formData.append("oldImagePublic_id", oldImagePublic_id);
        const response = await dispatch(
          replace_existingProductImage({
            productId: initialData?._id,
            formData,
          }),
        ).unwrap();

        if (!response) return toast.error("failed to replace existing_image");
        console.log("response :", response);

        setExistingImage(response.data?.images);

        toast.success("existing image replace successfully");
      }
    } catch (error) {
      console.error("The hidden error is:", error);
      toast.error(error.message || "Failed to replace existing image");
    } finally {
      setImageLoader(null);
    }
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
              onChange={(e) => setProductName(e.target.value)}
              value={prodcutName}
              placeholder="Product Name"
              required
              className="flex flex-wrap items-center text-gray-900 border-none outline-none placeholder-gray-400 gap-2 p-2 bg-white  rounded-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm text-indigo-100" htmlFor="brandName">
              Product Brand
            </label>
            <input
              type="text"
              id="brandName"
              onChange={(e) => setbrandName(e.target.value)}
              value={barandName}
              required
              placeholder="Brand Name"
              className="flex flex-wrap items-center text-gray-900 border-none outline-none placeholder-gray-400 gap-2 p-2 bg-white  rounded-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="relative flex flex-col w-full gap-2">
            <label className="text-sm text-indigo-100" htmlFor="category">
              Category
            </label>
            <div className=" relative  overflow-visible flex items-center justify-between">
              {" "}
              <input
                className="flex flex-wrap items-center text-gray-900 border-none outline-none placeholder-gray-400 gap-2 p-2 bg-white  rounded-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all"
                value={category}
                required
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
              <div className="h-[300px] w-full absolute top-full left-0 z-40 overflow-x-auto flex flex-col bg-slate-600 my-0 px-2 py-2 shadow-xs shadow-white rounded-b-md">
                <input
                  onChange={searchCatHandler}
                  value={search}
                  className="border border-slate-200 outline-none focus:border-emerald-500 bg-white rounded-md placeholder-slate-500 w-[40%] py-1.5 px-7 text-slate-950"
                  type="text"
                  required
                  placeholder="search category"
                />
                {categoryList.map((c, i) => {
                  return (
                    <div key={i} className="flex flex-col">
                      <span
                        onClick={() => {
                          setCategory(c.category_name);
                          setCatId(c?._id);
                          setSearch("");
                          setCatShow(!catShow);
                        }}
                        className="hover:bg-slate-300 rounded-sm py-1 px-1.5 hover:text-slate-900"
                      >
                        {c.category_name}
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
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
              placeholder="Stock"
              className="flex flex-wrap items-center text-gray-900 border-none outline-none placeholder-gray-400 gap-2 p-2 bg-white  rounded-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm text-indigo-100" htmlFor="discount">
              Price
            </label>
            <input
              type="number"
              id="discount"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              placeholder="Price"
              className="flex flex-wrap items-center text-gray-900 border-none outline-none placeholder-gray-400 gap-2 p-2 bg-white  rounded-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm text-indigo-100" htmlFor="discount">
              Discount
            </label>
            <input
              type="number"
              id="discount"
              required
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="%"
              className="flex flex-wrap items-center text-gray-900 border-none outline-none placeholder-gray-400 gap-2 p-2 bg-white  rounded-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex flex-col w-full gap-2 ">
            <label className="text-sm text-indigo-100" htmlFor="discount">
              Description
            </label>
            <textarea
              type="number"
              id="discount"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Write something about product..."
              className="flex flex-wrap items-center text-gray-900 border-none outline-none placeholder-gray-400 gap-2 p-2 bg-white  rounded-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex flex-col w-full gap-2">
            <label className="text-sm text-indigo-100" htmlFor="discount">
              Tags
            </label>
            <div className="flex flex-wrap items-center gap-2 p-2 bg-white border border-gray-300 rounded-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
              {tags.map((t, index) => (
                <span
                  key={index}
                  className="flex items-center px-2.5 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
                >
                  {t}
                  <button
                    onClick={() => removeTag(index)}
                    className="flex items-center cursor-pointer text-lg justify-center w-4 h-4 ml-1.5 text-blue-600 rounded-full hover:bg-blue-200 hover:text-blue-900 focus:outline-none"
                  >
                    &times;
                  </button>
                </span>
              ))}

              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow min-w-[120px] p-1 text-sm bg-transparent outline-none border-none text-gray-900 placeholder-gray-400"
                placeholder={
                  tags.length === 0
                    ? "Type and press Enter..."
                    : "Add more tags..."
                }
              />
            </div>
          </div>
        </div>

        {/* Row 5 */}
        <div className="flex w-full flex-wrap items-center gap-2">
          {initialData
            ? exisingImage.map((image, i) => {
                return (
                  <label
                    onClick={(e) => e.stopPropagation()}
                    htmlFor={`replace-image-${i}`}
                    key={i}
                    className="relative w-[200px] h-[120px] flex items-center justify-center gap-3 cursor-pointer"
                  >
                    {imageLoader === image?.public_id && (
                      <div className="absolute flex inset-0 items-center justify-center w-full h-full bg-slate-900/60">
                        <FadeLoader size={20} color="#ffffff" />
                      </div>
                    )}

                    <img
                      src={image.url}
                      alt=""
                      className="w-full h-full rounded-md object-cover"
                    />

                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        remove_productSingleImage(image?.public_id);
                      }}
                      className="absolute top-2 right-2 text-white bg-slate-900 shadow-md p-[2px] rounded-2xl cursor-pointer transition-all hover:scale-105"
                    >
                      <MdClear size={20} />
                    </span>

                    <input
                      onChange={(e) =>
                        replaceExitingProductImage(e, image.public_id)
                      }
                      type="file"
                      required
                      id={`replace-image-${i}`}
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                );
              })
            : files.map((image, i) => {
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
                      required
                      id={`replace-image-${i}`}
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                );
              })}

          <label
            htmlFor="image-upload"
            className="relative flex flex-col items-center justify-center w-[200px] h-[120px]  rounded-md border hover:border-2 border-dashed border-slate-500 transition-all cursor-pointer"
          >
            <span>
              <CiImageOn size={20} />
            </span>
            <span>{imageLoader ? "uploading..." : "Select image"}</span>

            {imageLoader === "new" && (
              <div className="absolute flex inset-0 items-center justify-center w-full h-full bg-slate-900/60">
                <FadeLoader size={20} color="#ffffff" />
              </div>
            )}

            {initialData ? (
              <input
                className="hidden"
                type="file"
                onChange={(e) => addProductSingleImage(e)}
                accept="image/*"
                id="image-upload"
              />
            ) : (
              <input
                className="hidden"
                type="file"
                multiple
                onChange={imagehandler}
                accept="image/*"
                id="image-upload"
              />
            )}
          </label>
        </div>
        <div>
          <button
            className="py-1.5 px-2 rounded-md text-white cursor-pointer bg-blue-500"
            type="submit"
            onClick={submitProduct}
          >
            {p_loader ? (
              <BeatLoader
                color="#fff"
                size={"8px"}
                cssOverride={{ textAlign: "center" }}
              />
            ) : initialData ? (
              "Update product"
            ) : (
              "Create Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
