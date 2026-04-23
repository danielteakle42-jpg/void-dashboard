import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'

function clean(u) {
  return (u || '')
    .toString()
    .replace('@', '')
    .toLowerCase()
    .trim()
}

export default function Navbar() {
  const router = useRouter()
  const path = router.pathname

  const [user, setUser] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  const itemRefs = useRef([])

  const admins = ['ppn777', 'ppm1']

  /* INIT */
  useEffect(() => {
    const raw = localStorage.getItem('user')
    if (raw) setUser(clean(raw))

    const onScroll = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isAdmin = admins.includes(user)

  /* 🔥 HOME ROUTE (REAL VALUE) */
  const homeRoute = user ? `/dashboard/${user}` : '/'

  /* ACTIVE TAB */
  const isActive = (route) => {
    if (route === homeRoute) {
      return path.startsWith('/dashboard')
    }
    return path.startsWith(route)
  }

  const logout = () => {
    if (!confirm('Log out?')) return
    localStorage.removeItem('user')
    setUser(null)
    router.push('/')
  }

  /* NAV ITEMS (NO FAKE ROUTES) */
  const navItems = [
    { route: '/leaderboard', label: 'Leaderboard' },
    { route: '/incentives', label: 'Incentives' },
    ...(isAdmin
      ? [{ route: '/admin', label: 'Admin' }]
      : [{ route: homeRoute, label: 'Home' }]
    )
  ]

  const activeIndex = navItems.findIndex(i => isActive(i.route))

  const [sliderStyle, setSliderStyle] = useState({})

  useEffect(() => {
    const el = itemRefs.current[activeIndex]
    if (el) {
      setSliderStyle({
        width: el.offsetWidth,
        left: el.offsetLeft
      })
    }
  }, [activeIndex])

  return (
    <div className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">

        {/* LOGO */}
        <div className="left" onClick={() => router.push(homeRoute)}>
          <img src="/logo.jpg" />
          <span>VOID</span>
        </div>

        {/* NAV */}
        <div className="center">

          <div
            className="slider"
            style={{
              width: sliderStyle.width,
              transform: `translateX(${sliderStyle.left}px)`
            }}
          />

          {navItems.map((item, i) => (
            <div
              key={item.route}
              ref={(el) => (itemRefs.current[i] = el)}
              onClick={() => router.push(item.route)}
              className={`nav-item ${isActive(item.route) ? 'active' : ''}`}
            >
              {item.label}
            </div>
          ))}

        </div>

        {/* RIGHT */}
        <div className="right">
          {user && (
            <div className="logout" onClick={logout}>
              Logout
            </div>
          )}
        </div>

      </nav>

      <style jsx>{`
        .nav-wrapper {
          position: sticky;
          top: 0;
          z-index: 999;
          display:flex;
          justify-content:center;
          padding: 14px 0;
          transition: 0.25s ease;
        }

        .nav-wrapper.scrolled {
          padding: 8px 0;
        }

        .navbar {
          display:flex;
          align-items:center;
          justify-content:space-between;
          width:92%;
          max-width:1200px;
          padding:14px 22px;
          border-radius:18px;

          background: rgba(10,10,15,0.92);
          backdrop-filter: blur(10px);
          border:1px solid rgba(255,255,255,0.05);
        }

        .left {
          display:flex;
          gap:10px;
          cursor:pointer;
          align-items:center;
        }

        .left img {
          width:40px;
          border-radius:10px;
        }

        .center {
          position:relative;
          display:flex;
          gap:10px;
          padding:6px;
          border-radius:999px;
          background:rgba(255,255,255,0.03);
        }

        .slider {
          position:absolute;
          top:4px;
          height:32px;
          border-radius:999px;
          background:linear-gradient(90deg,#7c3aed,#06b6d4);
          transition:0.35s cubic-bezier(.22,1,.36,1);
        }

        .nav-item {
          padding:8px 14px;
          cursor:pointer;
          z-index:2;
          opacity:0.6;
          transition:opacity 0.2s ease;
        }

        .nav-item:hover {
          opacity:1;
        }

        .nav-item.active {
          opacity:1;
          font-weight:600;
        }

        .logout {
          padding:8px 14px;
          border-radius:10px;
          background:rgba(255,255,255,0.05);
          cursor:pointer;
        }
      `}</style>
    </div>
  )
}