import { useState } from 'react'
import appLogo from '../../assets/app-logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar">
      <a href="/#home" aria-label="Go to home section" onClick={closeMenu}>
        <img className="app-logo" src={appLogo} alt="Kaung Set Paing logo" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span className="menu-toggle-line" />
        <span className="menu-toggle-line" />
      </button>

      <nav
        className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
        id="main-navigation"
        aria-label="Main navigation"
      >
        <a href="/#home" onClick={closeMenu}>Home</a>
        <a href="/#about" onClick={closeMenu}>About</a>
        <a href="/#skills" onClick={closeMenu}>Skills</a>
        <a href="/#portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="/#experience" onClick={closeMenu}>Experience</a>
        <a href="/#services" onClick={closeMenu}>Services</a>
        <a href="/#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  )
}

export default Navbar
