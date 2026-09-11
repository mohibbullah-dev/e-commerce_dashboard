import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AdminRoutes, PublicGaurd, SellerRoutes } from "./routes";
import ProtectRoute from "./routes/ProtectRoute";
import AdminLayout from "../Layout/adminLayout/AdminLayout";
import PublicLayout from "../Layout/publicLayout/PublicLayout";
import SellerLayout from "../Layout/sellerLayout/sellerLayout";
import publicRoutes from "./routes/PublicRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ element: <PublicGaurd />, children: publicRoutes }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        element: <ProtectRoute allowedRoles={"admin"} />,
        children: AdminRoutes,
      },
    ],
  },

  {
    path: "/seller",
    element: <SellerLayout />,
    children: [
      {
        element: <ProtectRoute allowedRoles={"seller"} />,
        children: SellerRoutes,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
