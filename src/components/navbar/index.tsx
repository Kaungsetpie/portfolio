import appLogo from '../../assets/app-logo.png'

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" aria-label="Go to home section">
        <img className="app-logo" src={appLogo} alt="Kaung Set Paing logo" />
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar
