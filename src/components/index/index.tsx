import { LuDownload } from 'react-icons/lu'
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
          I build reliable{' '}
          <span className="home-heading-accent">
            web and mobile products.
          </span>
        </span>
      </h1>
      <p className="home-introduction">
        From responsive interfaces to APIs and deployment, I turn ideas into
        polished digital products that are ready for real users and built to
        support your business.
      </p>

      <div className="home-actions">
        <a className="home-button home-button-primary" href="#portfolio">
          Explore My Work
        </a>
        <a className="home-button home-button-secondary" href="#contact">
          Start a Project
        </a>
        <a
          className="home-button home-button-cv"
          href="/Kaung_Set_Paing_CV.pdf"
          download="Kaung_Set_Paing_CV.pdf"
        >
          Download CV <LuDownload aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default Home
