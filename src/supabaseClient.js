import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://pzjdschtolerptgnxgvk.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6amRzY2h0b2xlcnB0Z254Z3ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwODgzNDUsImV4cCI6MjA4NzY2NDM0NX0.wbGoGFEVSe1Xi8AejmzzZpwCyK7MRTVbKJqJgrGanTg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)