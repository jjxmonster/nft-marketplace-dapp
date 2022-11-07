import React, { ReactElement, FunctionComponent } from "react";

interface PageWrapperProps {
  children: ReactElement | Array<ReactElement>;
}

const PageWrapper: FunctionComponent<PageWrapperProps> = ({ children }) => {
  return (
    <div className="col-start-2 flex items-start col-span-4 row-span-4 px-24">
      {children}
    </div>
  );
};

export default PageWrapper;
