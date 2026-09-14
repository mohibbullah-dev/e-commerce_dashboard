import { lazy } from "react";

const SellerDashaoard = lazy(
  () => import("../../views/seller/SellerDashaoard"),
);
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const AllProducts = lazy(() => import("../../views/seller/AllProducts"));
const DiscounteProduct = lazy(
  () => import("../../views/seller/DiscounteProduct"),
);
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));

const SellerRoutes = [
  { path: "dashboard", element: <SellerDashaoard /> },
  { path: "addProduct", element: <AddProduct /> },
  { path: "allProdcuts", element: <AllProducts /> },
  { path: "discountProduct", element: <DiscounteProduct /> },
  { path: "orders", element: <Orders /> },
  { path: "payments", element: <Payments /> },
];
export default SellerRoutes;
