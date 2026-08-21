import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { admin_login } from "../../store/reducers/authSlice";
// import { Link } from "react-router-dom";
// import { FaGoogle, FaFacebook } from "react-icons/fa";
const AdminLogin = () => {
  const dispatch = useDispatch();

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

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-white p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to E-commerce</h2>
          <p className="text-sm mb-3 font-medium">
            {" "}
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

            <button className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 cursor-pointer">
              Log In
            </button>
            {/* <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't have a account ?
                <Link
                  className="font-bold ml-1 hover:underline hover:text-blue-400"
                  to="/register"
                >
                  Sign Up
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaGoogle />
                </span>
              </div>

              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
