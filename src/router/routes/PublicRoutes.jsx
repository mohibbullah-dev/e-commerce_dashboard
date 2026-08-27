import { lazy } from "react";
import SellerLogin from "../../views/auth/SellerLogin";
import Unauthorize from "../../views/auth/Unauthorize";

const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/seller/login",
    element: <SellerLogin />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorize />,
  },
];

export default publicRoutes;
