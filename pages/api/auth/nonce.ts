import { NextApiRequest, NextApiResponse } from "next";

import { v4 as uuidv4 } from "uuid";

import supabase from "../../../services/supabase/supabase";

const nonceApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { address } = req.body;

  const nonce = uuidv4();

  let { data, error } = await supabase
    .from("users")
    .select("nonce")
    .eq("address", address);

  if (data.length) {
    let { data, error } = await supabase
      .from("users")
      .update({ nonce })
      .match({ address });
  } else {
    let { data, error } = await supabase
      .from("users")
      .insert({ nonce, address });
  }

  if (error) {
    res.status(400).json({ error: error.message });
  } else {
    res.status(200).json({ nonce });
  }
};

export default nonceApi;
