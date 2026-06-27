import { createClient } from '@supabase/supabase-js'

// Vite exposes environment variables via import.meta.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// We only create the client if the keys are actually provided,
// to prevent the app from crashing before you set them up.
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;
