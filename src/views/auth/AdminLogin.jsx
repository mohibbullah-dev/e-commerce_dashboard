import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/reducers/authSlice";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { successMessage, errorMessage, loader, userInfo } = useSelector(
    (state) => state.auth,
  );

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-white p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to E-commerce</h2>
          <p className="text-sm mb-3 font-medium">
            Please Sign In your account
          </p>

          <form onSubmit={formSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                onChange={inputHandler}
                value={state.email}
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700/50 bg-transparent rounded-md"
                onChange={inputHandler}
                value={state.password}
                type="password"
                name="password"
                id="password"
                placeholder="password"
                required
              />
            </div>

            <button
              disabled={loader ? true : false}
              className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 cursor-pointer"
            >
              {loader ? (
                <BeatLoader
                  color="#fff"
                  size={"8px"}
                  cssOverride={{ textAlign: "center" }}
                />
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
