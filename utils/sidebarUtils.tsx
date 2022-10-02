import { SidebarItemType } from "../types/sidebarTypes";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ExploreIcon from "@mui/icons-material/Explore";

export const sideBarItems: Array<SidebarItemType> = [
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
