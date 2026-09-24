import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ allowedRoles }) => {
  const { userInfo } = useSelector((state) => state.auth);
  if (!userInfo) {
    if (allowedRoles.includes("admin")) {
      return <Navigate to="/admin/login" replace />;
    }

    if (allowedRoles.includes("seller")) {
      return <Navigate to="/seller/login" replace />;
    }
    return <Navigate to="/login" replace />;
  }

  if (userInfo && !allowedRoles.includes(userInfo?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectRoute;
