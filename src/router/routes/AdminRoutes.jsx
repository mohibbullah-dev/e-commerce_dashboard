import { lazy } from "react";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const AdminOrders = lazy(() => import("../../views/admin/AdminOrders"));
const AdminCategory = lazy(() => import("../../views/admin/AdminCategory"));
const AdminSeller = lazy(() => import("../../views/admin/AdminSeller"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const DeactivateSeller = lazy(
  () => import("../../views/admin/DeactivateSeller"),
);
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const SellerDetail = lazy(() => import("../../views/admin/SellerDetail"));

const AdminRoutes = [
  { path: "/admin/dashboard", element: <AdminDashboard /> },
  { path: "/admin/orders", element: <AdminOrders /> },
  { path: "/admin/category", element: <AdminCategory /> },
  { path: "/admin/seller", element: <AdminSeller /> },
  { path: "/admin/payment_request", element: <PaymentRequest /> },
  { path: "/admin/deactive_seller", element: <DeactivateSeller /> },
  { path: "/admin/seller_request", element: <SellerRequest /> },
  { path: "/admin/seller_detail/:seller_ID", element: <SellerDetail /> },
];

export default AdminRoutes;
