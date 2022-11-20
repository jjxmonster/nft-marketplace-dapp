import { CreateNFTFormItem } from "../../types/types";

// API
export const NONCE_API = "/api/auth/nonce";
export const WALLET_API = "api/auth/wallet";

// MESSAGES
export const MSG_USER_LOGGED = "User logged successfully";
export const MSG_METAMASK_ERROR = "Please install MetaMask";
export const MSG_SIGNATURE_ERROR = "User denied message signature";
export const MSG_WALLET_CONNECTING = "Connecting to your wallet...";
export const MGS_NONCE_GENERATING = "Generating nonce...";
export const MSG_NONCE_WAITING = "Waiting for signature...";

// ITEMS
export const CREATE_FORM_FIELDS: Array<CreateNFTFormItem> = [
  {
    type: "text",
    label: "Title",
    area: false,
    formKey: "title",
  },
  {
    type: "number",
    label: "Price [ETH]",
    area: false,
    formKey: "price",
  },
  {
    type: "text",
    label: "Description",
    area: true,
    formKey: "description",
  },
];
