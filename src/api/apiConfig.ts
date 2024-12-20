import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;

export const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY!, {
  auth: {
    persistSession: true,
    storage: AsyncStorage,
  },
});

export const supabaseEdgeFunction = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_SUPABASE_URL}/functions/v1/`,
});
