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
    key: "register",
    label: "Register",
    path: "/register",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "addedPage",
    label: "AddedPage",
    path: "/addedPage",
    icon: <HiOutlineUsers />,
  },
  {
      key: 'login',
      label: 'Login',
      path: '/login',
      icon: <HiOutlineDocumentText />
  },
  // {
  //     key: 'messages',
  //     label: 'Messages',
  //     path: '/messages',
  //     icon: <HiOutlineAnnotation />
  // }
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
];
