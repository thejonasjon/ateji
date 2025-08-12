// import { createClient } from '@supabase/supabase-js'

import { createClient } from "@supabase/supabase-js"

// Replace with your actual keys (or better, use environment variables)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)