import { useState, useEffect } from 'react'
import { Menu, X, Car, CalendarClock, LogIn, LogOut, UserPlus } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [token, setToken] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setToken(localStorage.getItem('tc4u_token'))
  }, [location.pathname])

  const logout = () => {
    localStorage.removeItem('tc4u_token')
    localStorage.removeItem('tc4u_user')
    setToken(null)
    navigate('/')
  }

  const NavLink = ({ to, children }) => (
    <a href={to} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Car className="w-6 h-6 text-blue-400" />
          <Link to="/" className="text-white font-semibold tracking-wide">Trust Cars 4U</Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="#about">About</NavLink>
          <NavLink to="#services">Services</NavLink>
          <NavLink to="#cars">Available Cars</NavLink>
          <NavLink to="#reviews">Reviews</NavLink>
          <NavLink to="#contact">Contact</NavLink>
          <Link to="/appointments" className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white">
            <CalendarClock className="w-4 h-4 text-blue-400" /> Book
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {!token ? (
            <>
              <button onClick={() => document.getElementById('auth-modal')?.showModal()} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm border border-white/10 transition">
                <LogIn className="w-4 h-4" /> Login / Signup
              </button>
            </>
          ) : (
            <button onClick={logout} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm border border-white/10 transition">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          )}
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-slate-900/95 border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="#about" className="text-white/80" onClick={() => setOpen(false)}>About</a>
            <a href="#services" className="text-white/80" onClick={() => setOpen(false)}>Services</a>
            <a href="#cars" className="text-white/80" onClick={() => setOpen(false)}>Available Cars</a>
            <a href="#reviews" className="text-white/80" onClick={() => setOpen(false)}>Reviews</a>
            <a href="#contact" className="text-white/80" onClick={() => setOpen(false)}>Contact</a>
            <Link to="/appointments" onClick={() => setOpen(false)} className="text-white/80">Book Appointment</Link>
            {!token ? (
              <button onClick={() => { setOpen(false); document.getElementById('auth-modal')?.showModal() }} className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white text-sm border border-white/10">
                <UserPlus className="w-4 h-4" /> Login / Signup
              </button>
            ) : (
              <button onClick={() => { setOpen(false); logout() }} className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white text-sm border border-white/10">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
