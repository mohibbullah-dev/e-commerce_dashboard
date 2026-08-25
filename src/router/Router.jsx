import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SideBar from "../Layout/SideBar";
import publicRoutes from "./routes/PublicRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [...publicRoutes],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
