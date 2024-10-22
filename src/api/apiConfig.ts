import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;

export const supabase = createClient(
  supabaseUrl,
  process.env.EXPO_PUBLIC_SUPABASE_KEY!,
  {
    auth: {
      persistSession: true,
      storage: AsyncStorage,
    },
  }
);
