import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
export const AllNav = [
  // admin menu
  {
    id: 1,
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdSpaceDashboard />,
    role: "admin",
  },
  {
    id: 2,
    title: "Orders",
    path: "/admin/orders",
    icon: <MdOutlineAddShoppingCart />,
    role: "admin",
  },
  {
    id: 3,
    title: "Catergory",
    path: "/admin/category",
    icon: <MdCategory />,
    role: "admin",
  },
  {
    id: 4,
    title: "Sellers",
    path: "/admin/serler",
    icon: <MdSpaceDashboard />,
    role: "admin",
  },
  {
    id: 5,
    title: "All sellers",
    path: "/admin/serllers",
    icon: <IoMdPeople />,
    role: "admin",
  },
  {
    id: 6,
    title: "Payment Request",
    path: "/admin/payment_request",
    icon: <MdOutlinePayment />,
    role: "admin",
  },
  {
    id: 7,
    title: "Deactive Sellers",
    path: "/admin/deactive_seller",
    icon: <IoMdPersonAdd />,
    role: "admin",
  },
  {
    id: 8,
    title: "Seller Request",
    path: "/admin/seller_request",
    icon: <FaCodePullRequest />,
    role: "admin",
  },
  {
    id: 9,
    title: "Live Chat",
    path: "/admin/live_chat",
    icon: <IoMdChatboxes />,
    role: "admin",
  },
  {
    id: 10,
    title: "Log Out",
    path: "/admin/Logout",
    icon: <IoMdLogOut />,
    role: "admin",
  },
];
