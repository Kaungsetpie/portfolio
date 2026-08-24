import { LuArrowUpRight } from 'react-icons/lu'
import { Link } from 'react-router'
import useScrollReveal from '../../hooks/useScrollReveal'
import { projects } from '../../data/projects'
import './portfolio.css'

function Portfolio() {
  const { elementRef, isVisible } = useScrollReveal()

  return (
    <section
      className={`portfolio-section scroll-section${isVisible ? ' is-visible' : ''}`}
      id="portfolio"
      ref={elementRef}
    >
      <div className="portfolio-content section-reveal-content">
        <div className="portfolio-heading">
          <div>
            <p className="section-eyebrow">Selected Work</p>
            <h2>Projects built for real-world use.</h2>
          </div>
          <p>A focused selection of products combining thoughtful interfaces, reliable engineering, and practical problem-solving.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <Link className="project-card" to={`/projects/${project.slug}`} key={project.slug}>
              <div className="project-card-visual" aria-hidden="true">
                <img src={project.image} alt="" />
              </div>
              <div className="project-card-copy">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.summary}</span>
                <ul className="project-card-tech" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
              <LuArrowUpRight className="project-card-arrow" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
