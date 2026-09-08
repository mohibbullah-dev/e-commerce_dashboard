import { lazy } from "react";
const SellerDashaoard = lazy(
  () => import("../../views/seller/SellerDashaoard"),
);

const SellerRoutes = [
  { path: "/seller/dashboard", element: <SellerDashaoard /> },
];
export default SellerRoutes;
