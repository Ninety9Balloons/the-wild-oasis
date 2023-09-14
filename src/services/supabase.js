import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ghakatjsdgvcmbfocogt.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoYWthdGpzZGd2Y21iZm9jb2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzNzM4NjUsImV4cCI6MjAwOTk0OTg2NX0.4zjUJjSPA7HhH1hew1LeltSJehv_EfSKHCw1NLifhBA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
