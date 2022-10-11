import * as React from "react";

import InfoIcon from "@mui/icons-material/Info";

const NotificationBox = () => {
  return (
    <div
      id="toast-success"
      className="flex items-center bg-gray p-4 mb-4 w-full border-black border-solid border-2 max-w-xs absolute right-2 top-2 z-50 rounded-lg shadow text-white bg-gray-800"
      role="alert"
    >
      <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 rounded-lg className=bg-green-800 className=text-green-200">
        <InfoIcon />
      </div>
      <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 className=text-gray-500 className=hover:text-white className=bg-gray-800 hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default NotificationBox;
