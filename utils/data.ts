export const getNonce = async (address: string | void) => {
  const response = await fetch("/api/auth/nonce", {
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
  const response = await fetch("/api/auth/wallet", {
    method: "POST",
    body: JSON.stringify({ address, signature, nonce }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { user } = await response.json();

  return user;
};
