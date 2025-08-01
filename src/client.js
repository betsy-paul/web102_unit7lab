import { createClient } from "@supabase/supabase-js";

const URL = 'https://epycdndodauxjitlpovv.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVweWNkbmRvZGF1eGppdGxwb3Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NTA2MTcsImV4cCI6MjA2OTQyNjYxN30.Zf-Zkf-cpJtOAIK7anJYk9fq01fKskyXC7oCK34PmkA'
const supabase = createClient(URL, API_KEY);

export default supabase;