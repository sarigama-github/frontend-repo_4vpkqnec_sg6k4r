import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer(){
  const links = [
    {icon: Facebook, href: '#'},
    {icon: Instagram, href: '#'},
    {icon: Twitter, href: '#'},
    {icon: Youtube, href: '#'},
  ]
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Trust Cars 4U. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {links.map((l, i)=>(
            <a key={i} href={l.href} className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20">
              <l.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
