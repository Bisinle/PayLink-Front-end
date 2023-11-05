import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "wallet",
    label: "Wallet",
    path: "/wallet",
    icon: <HiOutlineCube />,
  },

  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <HiOutlineUsers />,
  },
  {
    key: "adminDash",
    label: "Admin",
    path: "/adminDash",
    icon: <HiOutlineUsers />,
  }
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
  
  // {
  //     key: 'logout',
  //     label: 'Logout',
  //     path: '/logout',
  //     icon: <HiOutlineAnnotation />
  // },
];
