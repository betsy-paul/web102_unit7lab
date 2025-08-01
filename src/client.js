import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ossczperwzhygqqlmvci.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zc2N6cGVyd3poeWdxcWxtdmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwMTk5MjcsImV4cCI6MjA2OTU5NTkyN30.MqLSNTVjZi4_CUtrstyquXC3E1dTiZabtA1b_e-JNfo'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;