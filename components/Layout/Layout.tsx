import React, { FunctionComponent } from "react";

import StorefrontIcon from "@mui/icons-material/Storefront";
import Sidebar from "../Sidebar/Sidebar";

const AppLayout: FunctionComponent = () => {
  return (
    <>
      <header className="w-screen z-50 absolute pr-20 py-2 flex items-center justify-end bg-gray right-6"></header>
      <div className="h-screen relative w-96	flex flex-col px-12 py-16 after:w-full after:h-5/6 after:border-gray-100 after:border-r after:absolute after:m-auto after:inset-0 ">
        <div className="w-full h-16 flex items-center justify-center">
          <StorefrontIcon
            className="text-purple-light text-6xl"
            style={{ fontSize: "3rem" }}
          />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default AppLayout;
