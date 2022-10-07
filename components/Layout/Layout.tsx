import React, { FunctionComponent } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const AppLayout: FunctionComponent = () => {
  return (
    <>
      <Sidebar />
      <Header />
    </>
  );
};

export default AppLayout;
