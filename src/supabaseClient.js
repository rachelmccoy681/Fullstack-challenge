import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://pzjdschtolerptgnxgvk.supabase.co"
const supabaseAnonKey = "sb_publishable_IvE5T0kwC0Tma3jcZH-SYg_a7Bsjjgj"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)