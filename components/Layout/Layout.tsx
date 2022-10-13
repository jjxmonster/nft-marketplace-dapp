import React, { FunctionComponent } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const AppLayout: FunctionComponent = () => {
  return (
    <>
      <Sidebar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
      </React.Suspense>
    </>
  );
};

export default AppLayout;
