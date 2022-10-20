import { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";

import supabase from "../../../services/supabase/supabase";

const walletApi = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { address, signature, nonce } = req.body;
    const signer_address = ethers.utils.verifyMessage(nonce, signature);

    if (signer_address !== address) {
      throw new Error("wrong_signature");
    }

    let { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("address", address)
      .eq("nonce", nonce)
      .single();

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default walletApi;
