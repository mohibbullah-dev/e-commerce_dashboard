import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, replace } from "react-router-dom";

const PublicGuard = () => {
  const { userInfo } = useSelector((state) => state.auth);

  if (userInfo && userInfo?.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }
  if (userInfo && userInfo?.role === "seller") {
    return <Navigate to="/seller/dashboard" />;
  }

  return <Outlet />;
};

export default PublicGuard;
