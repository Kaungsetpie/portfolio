import { useState } from 'react'
import Contact from './components/contact'
import Footer from './components/footer'
import Home from './components/index'
import Loading from './components/loading/loading'
import Navbar from './components/navbar'
import Portfolio from './components/portfolio'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-content">
        <Home />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
