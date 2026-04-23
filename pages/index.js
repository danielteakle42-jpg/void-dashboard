import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  function cleanUsername(name) {
    return (name || "")
      .toString()
      .replace('@', '')
      .replace(/\s+/g, '')
      .toLowerCase()
      .trim()
  }

  async function go() {
    if (loading) return

    const u = cleanUsername(username)

    if (!u) {
      setError("Enter a username")
      return
    }

    setError('')
    setLoading(true)

    try {
      if (u === 'ppn777' || u === 'ppm1') {
        localStorage.setItem('user', u)
        router.push('/admin')
        return
      }

      const res = await fetch('/api/get-creators')
      const data = await res.json()

      const list = data?.creators || []
      const found = list.find(c => c.username === u)

      if (!found) {
        setError("User not found")
        setLoading(false)
        return
      }

      localStorage.setItem('user', u)
      router.push(`/dashboard/${u}`)

    } catch (err) {
      console.error(err)
      setError("Something went wrong")
      setLoading(false)
    }
  }

  return (
    <div className="wrapper">

      {/* subtle background gradient (SAFE, no blur) */}
      <div className="bg" />

      <div className="card">

        <img
          src="/logo.jpg"
          className="logo"
          onError={(e)=>{
            e.target.src = "https://api.dicebear.com/7.x/initials/png?seed=VOID"
          }}
        />

        <h1>VOID</h1>
        <p className="sub">Enter your creator dashboard</p>

        <input
          value={username}
          onChange={(e)=>{
            setUsername(e.target.value)
            setError('')
          }}
          placeholder="@username"
          onKeyDown={(e)=>e.key === 'Enter' && go()}
        />

        {error && <div className="error">{error}</div>}

        <button onClick={go} disabled={loading}>
          {loading ? "Entering..." : "Enter Dashboard"}
        </button>

      </div>

      <style jsx>{`

        .wrapper {
          position:relative;
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:#050505;
        }

        /* ✅ SAFE background (no blur, no animation) */
        .bg {
          position:absolute;
          width:600px;
          height:600px;
          background:radial-gradient(circle,#7c3aed,transparent 70%);
          opacity:0.15;
          pointer-events:none;
        }

        .card {
          position:relative;
          z-index:2;

          width:100%;
          max-width:420px;
          padding:42px;
          border-radius:20px;

          text-align:center;

          background:#0a0a14;
          border:1px solid rgba(124,58,237,0.25);

          box-shadow:
            0 20px 60px rgba(0,0,0,0.8),
            0 0 40px rgba(124,58,237,0.15);
        }

        .logo {
          width:80px;
          border-radius:14px;
          margin-bottom:20px;
        }

        h1 {
          font-size:38px;
          margin-bottom:6px;
          font-weight:900;

          background:linear-gradient(90deg,#7c3aed,#06b6d4);
          -webkit-background-clip:text;
          color:transparent;
        }

        .sub {
          opacity:0.6;
          margin-bottom:28px;
          font-size:14px;
        }

        input {
          width:100%;
          padding:14px;
          border-radius:12px;

          background:#111827;
          border:1px solid rgba(255,255,255,0.08);

          color:white;
          outline:none;

          transition:border 0.2s ease;
        }

        input:focus {
          border-color:#7c3aed;
        }

        .error {
          margin-top:10px;
          color:#f87171;
          font-size:13px;
        }

        button {
          width:100%;
          margin-top:20px;
          padding:14px;

          border:none;
          border-radius:12px;

          font-weight:700;
          cursor:pointer;

          background:linear-gradient(90deg,#7c3aed,#06b6d4);
          color:white;

          transition:opacity 0.2s ease, box-shadow 0.2s ease;
        }

        button:hover {
          box-shadow:0 0 20px rgba(124,58,237,0.4);
        }

        button:disabled {
          opacity:0.6;
          cursor:not-allowed;
        }

      `}</style>
    </div>
  )
}