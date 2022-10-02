import * as React from "react";

import { sideBarItems } from "../../utils/sidebarUtils";
import SidebarItem from "../SidebarItem/SidebarItem";

const Sidebar = () => {
  return (
    <div className="w-full mt-12 z-30">
      {sideBarItems.map(item => (
        <SidebarItem itemObject={item} key={item.pathname} />
      ))}
    </div>
  );
};

export default Sidebar;
