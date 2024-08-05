import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://luixguzutdpxrajdhswj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1aXhndXp1dGRweHJhamRoc3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MzE0NDMsImV4cCI6MjAzNjAwNzQ0M30.Jgm34C-er6khH1f3J57g8UWmO_JDs3oyMl8RPXcbKdI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
