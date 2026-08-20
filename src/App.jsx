import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="relative overflow-x-clip px-4 pb-6 pt-4 text-slate-100 sm:px-6 lg:px-10">
      <div className="grain-overlay" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0 -z-10 grid-pulse"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(120,166,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(120,166,255,0.16) 1px, transparent 1px)',
          backgroundSize: '58px 58px, 58px 58px',
          maskImage:
            'radial-gradient(circle at center, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.18) 74%, transparent 95%)',
        }}
      />
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 pb-6 pt-4">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
