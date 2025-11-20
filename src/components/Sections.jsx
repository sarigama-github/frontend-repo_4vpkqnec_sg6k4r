import { Star, Shield, Sparkles, Wrench, Car, Phone, Mail } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">About Us</h2>
          <p className="mt-4 text-white/70">Trust Cars 4U is a premium automotive brand focused on precision engineering and client-first service. Our promise is simple: impeccable vehicles, transparent process, and trust that drives us forward.</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[{icon:Shield, text:'Certified Technicians'}, {icon:Sparkles, text:'Showroom Condition'}, {icon:Wrench, text:'Elite Service'}, {icon:Star, text:'5-Star Support'}].map((f, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <f.icon className="w-5 h-5 text-blue-400" />
                <span className="text-white/80 text-sm">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-400/20 border border-white/10"></div>
      </div>
    </section>
  )
}

export function Services() {
  const items = [
    { icon: Wrench, title: 'Maintenance', desc: 'Precision servicing by specialists' },
    { icon: Car, title: 'Test Drives', desc: 'Tailored experiences on your terms' },
    { icon: Shield, title: 'Warranty', desc: 'Extended coverage and protection' },
  ]
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">Car Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-blue-500/40 hover:shadow-blue-500/10 hover:shadow-xl transition">
              <it.icon className="w-6 h-6 text-blue-400" />
              <h3 className="mt-3 text-white font-semibold">{it.title}</h3>
              <p className="text-white/70 text-sm mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Cars() {
  const list = [
    { model: 'Apex GT-R', price: '89,900', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop' },
    { model: 'Nova S-Class', price: '119,500', img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop' },
    { model: 'Spectra EVX', price: '76,200', img: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <section id="cars" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">Available Cars</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {list.map((c, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={c.img} alt={c.model} className="h-56 w-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="p-5">
                <h3 className="text-white font-semibold">{c.model}</h3>
                <p className="text-blue-300">${c.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Reviews() {
  const items = [
    { name: 'Ava R.', text: 'Flawless service and a breathtaking drive. True luxury.' },
    { name: 'Noah L.', text: 'Transparent, fast, and premium. Highly recommend.' },
    { name: 'Oliver G.', text: 'Booked a test drive in minutes. Exceptional staff.' },
  ]
  return (
    <section id="reviews" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((r, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <Star className="w-5 h-5 text-blue-400" />
              <p className="text-white/80 mt-3">“{r.text}”</p>
              <p className="text-white/60 text-sm mt-2">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <p className="mt-4 text-white/70">We are here to help you choose and maintain your next premium ride.</p>
          <div className="mt-6 space-y-3 text-white/80 text-sm">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-400"/> +1 (555) 012-3456</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-400"/> contact@trustcars4u.com</p>
          </div>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" placeholder="Name" />
            <input className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50" placeholder="Email" />
            <input className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 md:col-span-2" placeholder="Subject" />
            <textarea rows="4" className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 md:col-span-2" placeholder="Message" />
          </div>
          <button className="mt-4 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium">Send</button>
        </form>
      </div>
    </section>
  )
}
