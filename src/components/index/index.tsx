import './index.css'

function Home() {
  return (
    <section className="home-hero" id="home">
      <div className="home-background" aria-hidden="true">
        <video autoPlay loop muted playsInline preload="metadata">
          <source src="/home-background.mp4" type="video/mp4" />
        </video>
      </div>

      <p className="home-eyebrow">
        <span>Hello, I’m Kaung Set Paing</span>
      </p>
      <h1>
        <span className="home-heading-line">
          I create{' '}
          <span className="home-heading-accent">
            thoughtful digital experiences.
          </span>
        </span>
      </h1>
      <p className="home-introduction">
        I’m a developer who enjoys turning ideas into clean, purposeful web
        experiences. I focus on simple interactions, thoughtful details, and
        work that feels easy to use.
      </p>

      <div className="home-actions">
        <a className="home-button home-button-primary" href="#portfolio">
          View My Work
        </a>
        <a className="home-button home-button-secondary" href="#contact">
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Home
