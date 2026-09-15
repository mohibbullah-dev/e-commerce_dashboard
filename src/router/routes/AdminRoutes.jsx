import { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const AdminOrders = lazy(() => import("../../views/admin/AdminOrders"));
const AdminCategory = lazy(() => import("../../views/admin/AdminCategory"));
const AdminSeller = lazy(() => import("../../views/admin/AdminSeller"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const DeactivateSeller = lazy(
  () => import("../../views/admin/DeactivateSeller"),
);
const OrderDetail = lazy(() => import("../../views/admin/OrderDetail"));
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const SellerDetail = lazy(() => import("../../views/admin/SellerDetail"));
const SellerChat = lazy(() => import("../../views/admin/SellerChat"));
const CustomerChat = lazy(() => import("../../views/admin/CustomerChat"));

const AdminRoutes = [
  { path: "dashboard", element: <AdminDashboard /> },
  { path: "orders", element: <AdminOrders /> },
  { path: "category", element: <AdminCategory /> },
  { path: "seller", element: <AdminSeller /> },
  { path: "payment_request", element: <PaymentRequest /> },
  { path: "deactive_seller", element: <DeactivateSeller /> },
  { path: "seller_request", element: <SellerRequest /> },
  { path: "seller_detail/:seller_ID", element: <SellerDetail /> },
  { path: "customer_chat", element: <CustomerChat /> },
  { path: "seller_chat", element: <SellerChat /> },
  { path: "order/detail/:order_ID", element: <OrderDetail /> },
];

export default AdminRoutes;
