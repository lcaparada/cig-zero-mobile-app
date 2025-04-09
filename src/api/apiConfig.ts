import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";

const supabaseUrl = "https://zttdrjkncjppvnmtyupk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0dGRyamtuY2pwcHZubXR5dXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MDc3NjUsImV4cCI6MjA0NTE4Mzc2NX0.x2KiIn1MegggpJsU1cgCaUhatC6QPZYV9fZwlbuKxCY";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    storage: AsyncStorage,
  },
});

export const supabaseEdgeFunction = axios.create({
  baseURL: `${supabaseUrl}/functions/v1/`,
});
