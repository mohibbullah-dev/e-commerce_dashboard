import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdClear } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  ClearMessage,
  create_store,
  update_store,
} from "../../../store/reducers/storeSlice";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const StoreForm = ({ store }) => {
  console.log("store :", store);
  const [logo, setLogo] = useState(store?.logo || null);
  const [banner, setBanner] = useState(store?.banner || null);
  const navigate = useNavigate();
  const [storeInfo, setStoreInfo] = useState({
    store_name: store?.name || "",
    store_email: store?.email || "",

    store_country: store?.contact?.[0]?.address?.country || "",
    store_sate: store?.contact?.[0]?.address?.state || "",
    store_city: store?.contact?.[0]?.address?.city || "",
    store_Street: store?.contact?.[0]?.address?.street || "",
    store_postalCode: store?.contact?.[0]?.address?.postalCode || "",
    store_phone: store?.contact?.[0]?.phone || "",
  });

  const dispatch = useDispatch();
  const { successMessage, errorMessage, s_loader } = useSelector(
    (state) => state?.store,
  );

  console.log("store :", store);
  const inputHandler = (e) => {
    setStoreInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // logo
  const LogoHandler = (e) => {
    const file = e.target.files[0];
    if (!file) return toast.error("please select a file!");
    const previewUrl = URL.createObjectURL(file);

    setLogo({ image: file, preview_url: previewUrl });
  };

  const remove_Logo = () => {
    setLogo(null);
  };

  const removeExisitngLogo = async () => {
    try {
    } catch (error) {}
  };

  // banner

  const bannerHandler = (e) => {
    const file = e.target.files[0];
    console.log("file :", file);
    if (!file) return toast.error("please select a file!");
    const previewUrl = URL.createObjectURL(file);

    setBanner({ image: file, preview_url: previewUrl });
  };

  const remove_banner = () => {
    setBanner(null);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!storeInfo?.store_name) return toast.error("store-name is required");
    if (!storeInfo?.store_email) return toast.error("store-email is required");
    if (!storeInfo?.store_country)
      return toast.error("store-country is required");
    if (!storeInfo?.store_sate) toast.error("store-sate is required");
    if (!storeInfo?.store_city) return toast.error("store-city is required");
    if (!storeInfo?.store_Street)
      return toast.error("store-Street is required");
    if (!storeInfo?.store_postalCode)
      return toast.error("store-postalCode is required");

    if (!storeInfo?.store_phone) return toast.error("store-phone is required");

    const formData = new FormData();

    formData.append("name", storeInfo?.store_name);
    formData.append("email", storeInfo?.store_email);
    formData.append("country", storeInfo?.store_country);
    formData.append("state", storeInfo?.store_sate);
    formData.append("city", storeInfo?.store_city);
    formData.append("street", storeInfo?.store_Street);
    formData.append("postalCode", storeInfo?.store_postalCode);
    formData.append("phone", storeInfo?.store_phone);
    formData.append("logo", logo?.image);
    formData.append("banner", banner?.image);

    if (store) {
      formData.append("oldLogoPublic_id", store?.logo?.public_id);
      formData.append("oldBannerPublic_id", store?.banner?.public_id);

      dispatch(update_store({ id: store._id, formData })).unwrap();
    } else {
      dispatch(create_store(formData));
    }
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(ClearMessage());
    }

    if (successMessage) {
      toast.success(successMessage);
      dispatch(ClearMessage());

      setStoreInfo({
        store_name: "",
        store_email: "",
        store_country: "",
        store_sate: "",
        store_city: "",
        store_Street: "",
        store_postalCode: "",
        store_phone: "",
      });
      setLogo(null);
      setBanner(null);
      navigate("/seller/my-store");
    }
  }, [errorMessage, successMessage, dispatch]);

  return (
    <form onSubmit={submitForm} className="p-2 flex flex-col gap-3">
      <div className="flex flex-col w-full gap-2">
        <label
          htmlFor="store_name"
          className="text-sm font-medium text-slate-700"
        >
          Store Name
        </label>
        <input
          onChange={(e) => inputHandler(e)}
          className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-300 rounded-lg outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
          type="text"
          value={storeInfo?.store_name}
          placeholder="Store Name"
          name="store_name"
          id="store_name"
        />
      </div>

      <div className="flex flex-col w-full gap-2">
        <label
          htmlFor="store_email"
          className="text-sm font-medium text-slate-700"
        >
          Store Email
        </label>
        <input
          onChange={(e) => inputHandler(e)}
          className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-300 rounded-lg outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
          type="text"
          placeholder="Store Email"
          value={storeInfo?.store_email}
          name="store_email"
          id="store_email"
        />
      </div>

      <div className="flex flex-col items-center justify-start w-full gap-2 md:flex-row ">
        <label
          onClick={(e) => e.stopPropagation()}
          htmlFor="logo"
          className="relative flex flex-col items-center justify-center w-full h-[200px] md:w-[200px] md:h-[120px]  rounded-md border hover:border-2 border-dashed border-slate-500 bg-slate-100 transition-all cursor-pointer"
        >
          {logo?.preview_url ? (
            <img
              src={logo?.preview_url}
              className="w-full h-full rounded-md object-cover"
            />
          ) : logo?.url ? (
            <img
              src={logo?.url}
              className="w-full h-full rounded-md object-cover"
            />
          ) : (
            <>
              <span>
                <CiImageOn size={20} />
              </span>
              <span> Select a Logo</span>
            </>
          )}

          <span
            onClick={(e) => {
              e.preventDefault();
              remove_Logo();
            }}
            className="absolute top-2 right-2 text-white bg-slate-900 shadow-md p-[2px] rounded-2xl cursor-pointer transition-all hover:scale-105"
          >
            <MdClear size={20} />
          </span>

          <input
            onChange={(e) => LogoHandler(e)}
            type="file"
            id="logo"
            className="hidden"
            accept="image/*"
          />
        </label>

        <label
          onClick={(e) => e.stopPropagation()}
          htmlFor="banner"
          className="relative flex flex-col items-center justify-center md:flex-1 w-full  h-[200px] md:w-[200px] md:h-[120px]  rounded-md border hover:border-2 border-dashed border-slate-500 bg-slate-100 transition-all cursor-pointer"
        >
          {banner?.preview_url ? (
            <img
              src={banner?.preview_url}
              className="w-full h-full rounded-md object-cover"
            />
          ) : banner?.url ? (
            <img
              src={banner?.url}
              className="w-full h-full rounded-md object-cover"
            />
          ) : (
            <>
              <span>
                <CiImageOn size={20} />
              </span>
              <span> Select a banner</span>
            </>
          )}

          {logo && (
            <span
              onClick={(e) => {
                e.preventDefault();
                remove_banner();
              }}
              className="absolute top-2 right-2 text-white bg-slate-900 shadow-md p-[2px] rounded-2xl cursor-pointer transition-all hover:scale-105"
            >
              <MdClear size={20} />
            </span>
          )}

          <input
            onChange={(e) => bannerHandler(e)}
            type="file"
            id="banner"
            name="banner"
            className="hidden"
            accept="image/*"
          />
        </label>
      </div>

      <hr className="text-indigo-100 my-6" />
      {/* address  */}
      <h2 className="text-slate-800 font-bold">Address</h2>
      <div className="flex gap-2">
        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="store_country"
            className="text-sm font-medium text-slate-700"
          >
            Country
          </label>
          <input
            onChange={(e) => inputHandler(e)}
            className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-300 rounded-lg outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
            type="text"
            placeholder="Store Country"
            value={storeInfo?.store_country}
            name="store_country"
            id="store_country"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="store-sate"
            className="text-sm font-medium text-slate-700"
          >
            State
          </label>
          <input
            onChange={(e) => inputHandler(e)}
            className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-300 rounded-lg outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
            type="text"
            value={storeInfo?.store_sate}
            placeholder="Store State"
            name="store_sate"
            id="store-sate"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="store_city"
            className="text-sm font-medium text-slate-700"
          >
            Street
          </label>
          <input
            onChange={(e) => inputHandler(e)}
            className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-300 rounded-lg outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
            type="text"
            value={storeInfo?.store_city}
            placeholder="Store City"
            name="store_city"
            id="store_city"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="store_Street"
            className="text-sm font-medium text-slate-700"
          >
            City
          </label>
          <input
            onChange={(e) => inputHandler(e)}
            className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-300 rounded-lg outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
            type="text"
            placeholder="Store Street"
            value={storeInfo?.store_Street}
            name="store_Street"
            id="store_Street"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="store_phone"
            className="text-sm font-medium text-slate-700"
          >
            Phone
          </label>
          <input
            onChange={(e) => inputHandler(e)}
            className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-300 rounded-lg outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
            type="number"
            placeholder="+20888888888"
            value={storeInfo?.store_phone}
            name="store_phone"
            id="store_phone"
          />
        </div>

        <div className="flex flex-col w-full gap-2">
          <label
            htmlFor="store-postalCode"
            className="text-sm font-medium text-slate-700"
          >
            PostalCode
          </label>
          <input
            onChange={(e) => inputHandler(e)}
            className="w-full px-4 py-2.5 text-slate-900 bg-white border border-slate-300 rounded-lg outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
            type="number"
            placeholder="0000"
            value={storeInfo?.store_postalCode}
            name="store_postalCode"
            id="store-postalCode"
          />
        </div>
      </div>

      <div className="bg-blue-500 hover:bg-blue-700 transition-colors text-white rounded-md py-1.5 px-3 transition-all md:w-[150px] text-center cursor-pointer">
        <button type="submit" className="cursor-pointer  transition-all">
          {s_loader ? (
            <BeatLoader
              color="#fff"
              size={"8px"}
              cssOverride={{ textAlign: "center" }}
            />
          ) : !store || Object.keys(store).length === 0 ? (
            "Create Store"
          ) : (
            "Update Store"
          )}
        </button>
      </div>
    </form>
  );
};

export default StoreForm;
