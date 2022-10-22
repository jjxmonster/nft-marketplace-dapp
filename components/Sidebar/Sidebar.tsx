import * as React from "react";

import SidebarItem from "../SidebarItem/SidebarItem";

import StorefrontIcon from "@mui/icons-material/Storefront";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ExploreIcon from "@mui/icons-material/Explore";

import { SidebarItemType } from "../../types/types";

const sideBarItems: Array<SidebarItemType> = [
  {
    name: "Home",
    pathname: "/",
    icon: <DashboardIcon style={{ fontSize: "1.8rem" }} />,
  },
  {
    name: "Create",
    pathname: "/create",
    icon: <AddBoxIcon style={{ fontSize: "1.8rem" }} />,
  },
  {
    name: "Explore",
    pathname: "/explore",
    icon: <ExploreIcon style={{ fontSize: "1.8rem" }} />,
  },
];

const Sidebar = () => {
  return (
    <div className="h-screen relative w-96 flex flex-col px-12 py-16 after:w-full after:h-5/6 after:border-gray-100 after:border-r after:absolute after:m-auto after:inset-0 ">
      <div className="w-full h-16 flex items-center justify-center">
        <StorefrontIcon
          className="text-purple-light text-6xl"
          style={{ fontSize: "3rem" }}
        />
      </div>
      <div className="w-full mt-12 z-30">
        {sideBarItems.map(item => (
          <SidebarItem itemObject={item} key={item.pathname} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
