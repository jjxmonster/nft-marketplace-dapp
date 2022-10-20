import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error("Missing API keys for Supabase");
}

const supabase = createClient(supabaseUrl, supabaseSecretKey);

export default supabase;
