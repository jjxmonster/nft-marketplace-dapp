import * as React from "react";

import { sideBarItems } from "../../utils/sidebarUtils";
import SidebarItem from "../SidebarItem/SidebarItem";

import StorefrontIcon from "@mui/icons-material/Storefront";

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
