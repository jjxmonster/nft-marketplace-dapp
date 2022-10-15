import * as React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";

import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import DangerousIcon from "@mui/icons-material/Dangerous";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { notificationState } from "../../atoms/atoms";
import { NotificatonType } from "../../types/types";
import { useEffect } from "react";

const NotificationBox = () => {
  const { isVisible, message, type } = useRecoilValue(notificationState);
  const resetNotificationState = useResetRecoilState(notificationState);

  const iconType = () => {
    switch (type) {
      case NotificatonType.DANGER:
        return <DangerousIcon color="error" />;
      case NotificatonType.INFORMATION:
        return <InfoIcon color="info" />;
      case NotificatonType.SUCCESS:
        return <CheckBoxIcon color="success" />;

      default:
        null;
    }
  };

  useEffect(() => {
    isVisible &&
      setTimeout(() => {
        resetNotificationState();
      }, 3000);
  }, [isVisible]);
  return (
    <div
      className={` ${
        !isVisible && "hidden"
      } flex justify-between items-center bg-gray p-4 mb-4 w-full border-black border-solid border-2 max-w-xs absolute right-2 top-2 z-50 rounded-lg shadow text-white bg-gray-800`}
      role="alert"
    >
      {iconType()}
      <p className="text-s">{message}</p>
      <CloseIcon />
    </div>
  );
};

export default NotificationBox;
