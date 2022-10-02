import { useRouter } from "next/router";
import * as React from "react";

import { SidebarItemType } from "../../types/sidebarTypes";

type Props = {
  itemObject: SidebarItemType;
};

const SidebarItem = ({ itemObject }: Props) => {
  const { pathname, push } = useRouter();
  return (
    <div
      key={itemObject.pathname}
      onClick={() => push(itemObject.pathname)}
      className={`w-full flex pl-7 items-center text-lg text-light-gray cursor-pointer hover:bg-gray-100 transition-all ease-500 hover:text-white rounded-xl mb-3 py-4 ${
        pathname === itemObject.pathname && "!text-white bg-gray-100"
      }`}
    >
      {itemObject.icon}
      <span className="ml-3">{itemObject.name}</span>
    </div>
  );
};

export default SidebarItem;
