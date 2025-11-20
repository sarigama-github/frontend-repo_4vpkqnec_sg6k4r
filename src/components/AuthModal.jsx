import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AuthModal() {
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API}/api/${mode === 'login' ? 'login' : 'signup'}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mode === 'login' ? { email, password } : { name, email, password })
      })
      if (!res.ok) throw new Error((await res.json()).detail || 'Request failed')
      const data = await res.json()
      localStorage.setItem('tc4u_token', data.token)
      localStorage.setItem('tc4u_user', JSON.stringify(data.user))
      document.getElementById('auth-modal')?.close()
      window.location.reload()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <dialog id="auth-modal" className="modal">
      <div className="modal-box bg-slate-900 border border-white/10 text-white max-w-md">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">{mode === 'login' ? 'Login' : 'Create Account'}</h3>
        <form className="mt-4 space-y-3" onSubmit={submit}>
          {mode === 'signup' && (
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" required />
          )}
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" required />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" required />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button disabled={loading} className="w-full px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium disabled:opacity-60">{loading ? 'Please wait...' : (mode === 'login' ? 'Login' : 'Sign Up')}</button>
        </form>
        <p className="mt-3 text-sm text-white/70">
          {mode === 'login' ? (
            <>New here? <button onClick={()=>setMode('signup')} className="text-blue-400">Create an account</button></>
          ) : (
            <>Already have an account? <button onClick={()=>setMode('login')} className="text-blue-400">Login</button></>
          )}
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}
