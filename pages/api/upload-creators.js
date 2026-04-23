import { supabase } from '../../lib/supabase'

/* ================= HELPERS ================= */

function cleanUsername(name) {
  return (name || '')
    .toString()
    .replace('@', '')
    .trim()
    .toLowerCase()
}

function parseDuration(str) {
  if (!str) return 0

  let hours = 0

  const h = str.match(/(\d+\.?\d*)h/i)
  const m = str.match(/(\d+\.?\d*)m/i)
  const s = str.match(/(\d+\.?\d*)s/i)

  if (h) hours += parseFloat(h[1])
  if (m) hours += parseFloat(m[1]) / 60
  if (s) hours += parseFloat(s[1]) / 3600

  return Number(hours.toFixed(2))
}

/* ================= PARSER ================= */

function parseRow(row) {
  if (!row) return null

  const usernameRaw =
    row["Creator's username"] ||
    row["Username"] ||
    row["username"]

  if (!usernameRaw) return null

  const username = cleanUsername(usernameRaw)

  if (!username || username.length < 3 || username.includes('~')) {
    return null
  }

  return {
    username,
    diamonds: Number(row["Diamonds"] ?? row["diamonds"]) || 0,
    live_days: Number(row["Valid go LIVE days"] ?? row["live_days"]) || 0,
    live_hours: parseDuration(row["LIVE duration"] ?? row["live_hours"]),
    avatar: `https://unavatar.io/tiktok/${username}`
  }
}

/* ================= API ================= */

export default async function handler(req, res) {
  try {
    /* ===== METHOD ===== */
    if (req.method !== 'POST') {
      return res.status(405).json({
        success: false,
        error: 'Method not allowed'
      })
    }

    /* ===== SAFE BODY ===== */
    const body = req.body || {}
    const admin = body.admin
    const data = body.data

    /* ===== AUTH ===== */
    if (!admin || !['ppn777', 'ppm1'].includes(admin)) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized'
      })
    }

    /* ===== VALIDATE ===== */
    if (!Array.isArray(data)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid data format'
      })
    }

    if (data.length > 5000) {
      return res.status(400).json({
        success: false,
        error: 'Too many rows'
      })
    }

    /* ===== PARSE ===== */
    const cleaned = data.map(parseRow).filter(Boolean)

    if (!cleaned.length) {
      return res.status(400).json({
        success: false,
        error: 'No valid rows found'
      })
    }

    /* ===== UNIQUE ===== */
    const unique = Object.values(
      Object.fromEntries(cleaned.map(c => [c.username, c]))
    )

    /* ===== CLEAR TABLE (SAFE) ===== */
    const { error: deleteError } = await supabase
      .from('creators')
      .delete()
      .gt('id', 0) // 🔥 ALWAYS WORKS

    if (deleteError) {
      console.error('DELETE ERROR:', deleteError)
      throw deleteError
    }

    /* ===== INSERT ===== */
    const { error: insertError } = await supabase
      .from('creators')
      .insert(unique)

    if (insertError) {
      console.error('INSERT ERROR:', insertError)
      throw insertError
    }

    return res.status(200).json({
      success: true,
      count: unique.length
    })

  } catch (err) {
    console.error('UPLOAD ERROR:', err)

    return res.status(500).json({
      success: false,
      error: err.message || 'Upload failed'
    })
  }
}