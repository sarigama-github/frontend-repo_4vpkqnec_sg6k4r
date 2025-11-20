import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/NoYj4XN8s0IlixJM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-widest text-blue-300/80 mb-3">Premium Automotive</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow">Your Trust, Our Drive</h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">Experience luxury performance with a service you can rely on. Tailored test-drives, elite maintenance, and a fleet curated for enthusiasts.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#cars" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 transition">Explore Cars</a>
              <a href="/appointments" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 transition">Book Appointment</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent pointer-events-none" />
    </section>
  )
}
