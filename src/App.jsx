import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const runObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.05 }
      )
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el))
      return observer
    }

    let observer = runObserver()

    // Re-observe whenever new .reveal elements appear (e.g. after filter changes)
    const mutationObserver = new MutationObserver(() => {
      observer.disconnect()
      observer = runObserver()
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0f1e] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Services />
      <Portfolio />
      <Differentials />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
