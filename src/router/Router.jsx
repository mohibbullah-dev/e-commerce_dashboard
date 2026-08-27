import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { AdminRoutes, PublicGaurd, PublicRoutes, SellerRoutes } from "./routes";
import ProtectRoute from "./routes/ProtectRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <PublicGaurd />,
        children: PublicRoutes,
      },
      {
        element: <ProtectRoute allowedRoles={["admin"]} />,
        children: AdminRoutes,
      },
      {
        element: <ProtectRoute allowedRoles={["seller"]} />,
        children: SellerRoutes,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
