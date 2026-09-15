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
const ChatToSupport = lazy(() => import("../../views/seller/ChatToSupport"));
const ChatToCustomer = lazy(() => import("../../views/seller/ChatToCustomer"));
const Profile = lazy(() => import("../../views/seller/Profile"));
const EditProduct = lazy(() => import("../../views/seller/EditProduct"));
const OrderDetail = lazy(() => import("../../views/seller/OrderDetail"));

const SellerRoutes = [
  { path: "dashboard", element: <SellerDashaoard /> },
  { path: "addProduct", element: <AddProduct /> },
  { path: "allProdcuts", element: <AllProducts /> },
  { path: "discountProduct", element: <DiscounteProduct /> },
  { path: "orders", element: <Orders /> },
  { path: "payments", element: <Payments /> },
  { path: "chatTosupport", element: <ChatToSupport /> },
  { path: "chatToCustomer", element: <ChatToCustomer /> },
  { path: "profile", element: <Profile /> },
  { path: "allProdcuts/editProduct/:productId", element: <EditProduct /> },
  { path: "orders/orderDetail/:orderId", element: <OrderDetail /> },
];
export default SellerRoutes;
