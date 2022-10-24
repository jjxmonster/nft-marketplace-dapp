import { LoadingStateType } from "../../types/types";
import {
  MGS_NONCE_GENERATING,
  NONCE_API,
  WALLET_API,
} from "../constants/constants";

export const getNonce = async (
  address: string | void,
  setLoadingState: (state: LoadingStateType) => void
) => {
  setLoadingState({
    isLoading: true,
    message: MGS_NONCE_GENERATING,
  });
  const response = await fetch(NONCE_API, {
    method: "POST",
    body: JSON.stringify({ address }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { nonce } = await response.json();
  return nonce;
};

export const getUser = async (
  address: string | void,
  signature: string | void,
  nonce: string
) => {
  const response = await fetch(WALLET_API, {
    method: "POST",
    body: JSON.stringify({ address, signature, nonce }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { user, token } = await response.json();

  return user;
};
