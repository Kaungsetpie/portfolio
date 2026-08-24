import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import AboutMe from './components/about/AboutMe'
import Contact from './components/contact'
import Footer from './components/footer'
import Experience from './components/experience'
import Home from './components/index'
import Loading from './components/loading/loading'
import Navbar from './components/navbar'
import Portfolio from './components/portfolio'
import ScrollToTop from './components/scroll-to-top'
import Services from './components/services'
import ProjectDetail from './components/project-detail'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (isLoading || location.pathname !== '/' || !location.hash) return

    const sectionId = location.hash.slice(1)
    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
        block: 'start',
      })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [isLoading, location.hash, location.key, location.pathname])

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />
  }

  const portfolioPage = (
    <div className="app-shell">
      <Navbar />

      <main className="page-content">
        <Home />
        <AboutMe />
        <Portfolio />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )

  return (
    <Routes>
      <Route path="/" element={portfolioPage} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
