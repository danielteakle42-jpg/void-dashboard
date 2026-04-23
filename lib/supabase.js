import { createClient } from '@supabase/supabase-js'

/* ================= ENV ================= */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('❌ Missing Supabase environment variables')
}

/* ================= GLOBAL CLIENT ================= */

let supabase

if (process.env.NODE_ENV === 'production') {
  supabase = createClient(supabaseUrl, supabaseKey)
} else {
  // 🔥 Prevent multiple instances in dev (Next.js hot reload fix)
  if (!global._supabase) {
    global._supabase = createClient(supabaseUrl, supabaseKey)
  }
  supabase = global._supabase
}

export { supabase }