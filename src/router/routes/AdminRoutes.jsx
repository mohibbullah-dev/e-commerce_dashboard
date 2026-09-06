import AdminDashboard from "../../views/admin/AdminDashboard";
import AdminOrders from "../../views/admin/AdminOrders";

const AdminRoutes = [
  { path: "/admin/dashboard", element: <AdminDashboard /> },
  { path: "/admin/orders", element: <AdminOrders /> },
];

export default AdminRoutes;
