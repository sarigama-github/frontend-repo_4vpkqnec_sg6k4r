import { useEffect, useState } from 'react'
import { CalendarClock } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AppointmentPage(){
  const [token, setToken] = useState(null)
  const [form, setForm] = useState({ name:'', phone:'', car_model:'', datetime_iso:'', purpose:'Test Drive' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [list, setList] = useState([])

  useEffect(()=>{
    const t = localStorage.getItem('tc4u_token')
    setToken(t)
    if(t){ fetch(`${API}/api/appointments?token=${t}`).then(r=>r.json()).then(setList).catch(()=>{}) }
  },[])

  const submit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try{
      const res = await fetch(`${API}/api/appointments?token=${token}`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      if(!res.ok) throw new Error((await res.json()).detail || 'Booking failed')
      const data = await res.json()
      setMessage('Appointment booked successfully!')
      setForm({ name:'', phone:'', car_model:'', datetime_iso:'', purpose:'Test Drive' })
      const updated = await fetch(`${API}/api/appointments?token=${token}`).then(r=>r.json())
      setList(updated)
    }catch(err){
      setMessage(err.message)
    }finally{ setLoading(false) }
  }

  if(!token){
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-2xl font-semibold">Please log in to book an appointment</h2>
          <button onClick={()=>document.getElementById('auth-modal')?.showModal()} className="mt-4 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white">Login / Signup</button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-center gap-3 mb-8">
        <CalendarClock className="w-6 h-6 text-blue-400" />
        <h2 className="text-2xl font-bold text-white">Book an Appointment</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="grid grid-cols-1 gap-4">
            <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" placeholder="Name" required />
            <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" placeholder="Phone" required />
            <input value={form.car_model} onChange={e=>setForm({...form, car_model:e.target.value})} className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" placeholder="Car Model" required />
            <input type="datetime-local" value={form.datetime_iso} onChange={e=>setForm({...form, datetime_iso:e.target.value})} className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" required />
            <select value={form.purpose} onChange={e=>setForm({...form, purpose:e.target.value})} className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white">
              <option>Test Drive</option>
              <option>Service</option>
              <option>Consultation</option>
            </select>
          </div>
          <button disabled={loading} className="mt-4 w-full px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium disabled:opacity-60">{loading ? 'Booking...' : 'Book Appointment'}</button>
          {message && <p className="mt-3 text-blue-300">{message}</p>}
        </form>

        <div>
          <h3 className="text-white font-semibold mb-3">Your Appointments</h3>
          <div className="space-y-3">
            {list.map(a => (
              <div key={a.id} className="rounded-xl p-4 bg-white/5 border border-white/10">
                <p className="text-white/80"><span className="text-white/60">Car:</span> {a.car_model}</p>
                <p className="text-white/80"><span className="text-white/60">When:</span> {new Date(a.datetime_iso).toLocaleString()}</p>
                <p className="text-white/80"><span className="text-white/60">Purpose:</span> {a.purpose}</p>
              </div>
            ))}
            {list.length===0 && <p className="text-white/60">No appointments yet.</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
