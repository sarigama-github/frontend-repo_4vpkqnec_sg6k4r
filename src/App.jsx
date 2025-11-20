import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Services, Cars, Reviews, Contact } from './components/Sections'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import AppointmentPage from './components/AppointmentPage'

function Home(){
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Cars />
      <Reviews />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<AppointmentPage />} />
          </Routes>
        </main>
        <Footer />
        <AuthModal />
      </div>
    </BrowserRouter>
  )
}

export default App
