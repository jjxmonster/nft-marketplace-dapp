import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
import jwt from "jsonwebtoken";

import supabase from "../../../services/supabase/supabase";

const walletApi = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { address, signature, nonce } = req.body;
    const signer_address = ethers.utils.verifyMessage(nonce, signature);

    if (signer_address.toLowerCase() !== address) {
      throw new Error("wrong_signature");
    }

    let { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("address", address)
      .eq("nonce", nonce)
      .single();

    const SUPABASE_JWT_SECRET = process.env.SUPABASE_JWT_SECRET ?? "";

    const token = jwt.sign(
      {
        aud: "authenticated",
        exp: Math.floor(Date.now() / 1000 + 60 * 60),
        sub: user.id,
        user_metadata: {
          id: user.id,
        },
        role: "authenticated",
      },
      SUPABASE_JWT_SECRET
    );

    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

export default walletApi;
