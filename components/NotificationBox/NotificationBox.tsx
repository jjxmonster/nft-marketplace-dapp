import React, { useState, useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";

import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import DangerousIcon from "@mui/icons-material/Dangerous";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import IconButton from "@mui/material/IconButton";

import { notificationState } from "../../atoms/atoms";
import { NotificatonType } from "../../types/types";

const NotificationBox = () => {
  const { isVisible, message, type } = useRecoilValue(notificationState);
  const resetNotificationState = useResetRecoilState(notificationState);
  const [boxBackground, setBoxBackground] = useState<string>();

  const iconType = () => {
    switch (type) {
      case NotificatonType.DANGER:
        return <DangerousIcon />;
      case NotificatonType.INFORMATION:
        return <InfoIcon />;
      case NotificatonType.SUCCESS:
        return <CheckBoxIcon />;

      default:
        null;
    }
  };

  useEffect(() => {
    switch (type) {
      case NotificatonType.DANGER:
        return setBoxBackground("bg-danger");
      case NotificatonType.INFORMATION:
        return setBoxBackground("bg-information");
      case NotificatonType.SUCCESS:
        return setBoxBackground("bg-success");

      default:
        null;
    }
  }, [type]);

  useEffect(() => {
    isVisible &&
      setTimeout(() => {
        resetNotificationState();
      }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div
      className={` ${
        !isVisible && "hidden"
      } flex justify-between ${boxBackground} items-center space-x-4 p-3 mb-4 border-black border-solid border-2  absolute right-5 top-5 z-50 rounded-lg shadow text-white `}
      role="alert"
    >
      {iconType()}
      <p className="text-s">{message}</p>
      <IconButton onClick={resetNotificationState}>
        <CloseIcon className="text-white" />
      </IconButton>
    </div>
  );
};

export default NotificationBox;
