import { MdSpaceDashboard } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
export const SellerAllNav = [
  {
    id: 1,
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdSpaceDashboard />,
    role: "seller",
  },

  {
    id: 2,
    title: "Add product",
    path: "/seller/addProduct",
    icon: <IoIosAddCircle />,
    role: "seller",
  },

  {
    id: 3,
    title: "All Products",
    path: "/seller/allProdcuts",
    icon: <MdOutlineProductionQuantityLimits />,
    role: "seller",
  },
  {
    id: 4,
    title: "Discount Product",
    path: "/seller/discountProduct",
    icon: <RiDiscountPercentLine />,
    role: "seller",
  },

  {
    id: 5,
    title: "Orders",
    path: "/seller/orders",
    icon: <MdOutlineAddShoppingCart />,
    role: "seller",
  },
  {
    id: 6,
    title: "Payments",
    path: "/seller/payments",
    icon: <MdOutlinePayment />,
    role: "seller",
  },
  {
    id: 7,
    title: "Chat Support",
    path: "/seller/chatTosupport",
    icon: <BiSupport />,
    role: "seller",
  },
  {
    id: 7,
    title: "SellerToCustomer",
    path: "/seller/chatToCustomer",
    icon: <IoMdChatboxes />,
    role: "seller",
  },
  {
    id: 7,
    title: "Profile",
    path: "/seller/profile",
    icon: <IoMdChatboxes />,
    role: "seller",
  },
];
