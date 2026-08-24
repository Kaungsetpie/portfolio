import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { LuArrowLeft, LuArrowUpRight } from 'react-icons/lu'
import Footer from '../footer'
import Navbar from '../navbar'
import { findProject } from '../../data/projects'
import { getProjectInsight } from '../../data/projectInsights'
import './project-detail.css'

function ProjectDetail() {
  const { slug } = useParams()
  const project = findProject(slug)
  const insight = project ? getProjectInsight(project.slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project || !insight) return <Navigate to="/" replace />

  return (
    <div className="app-shell project-page">
      <Navbar />
      <main className="project-detail">
        <Link className="project-back" to="/#portfolio">
          <LuArrowLeft aria-hidden="true" /> Back to selected work
        </Link>

        <header className="project-detail-hero">
          <div>
            <p className="section-eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
          </div>
          <p>{project.summary}</p>
        </header>

        <section className="project-detail-grid">
          <div>
            <p className="section-eyebrow">Overview</p>
            <h2>{project.caseStudyHeading}</h2>
          </div>
          <p className="project-overview">{project.overview}</p>
        </section>

        <section className="project-explanation-section">
          <div className="project-explanation-heading">
            <p className="section-eyebrow">How it works</p>
            <h2>From user action to useful result.</h2>
          </div>
          <ol className="project-workflow">
            {insight.workflow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="project-explanation-section project-task-section">
          <div className="project-explanation-heading">
            <p className="section-eyebrow">User tasks</p>
            <h2>What people use it for.</h2>
          </div>
          <ul className="project-task-list">
            {insight.tasks.map((task) => <li key={task}>{task}</li>)}
          </ul>
        </section>

        <section className="project-explanation-section project-logic-section">
          <div className="project-explanation-heading">
            <p className="section-eyebrow">Core logic</p>
            <h2>{insight.logicTitle}</h2>
          </div>
          <div className="project-logic-list">
            {insight.logic.map((item) => <p key={item}>{item}</p>)}
          </div>
        </section>

        <section className="project-detail-grid project-detail-features">
          <div>
            <p className="section-eyebrow">Core work</p>
            <h2>What I built.</h2>
          </div>
          <ol>
            {project.highlights.map((highlight, index) => (
              <li key={highlight}><span>0{index + 1}</span>{highlight}</li>
            ))}
          </ol>
        </section>

        <section className="project-stack-section">
          <p className="section-eyebrow">Technology stack</p>
          <div className="project-detail-stack">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </section>

        <Link className="project-next-cta" to="/#contact">
          <span>Have a similar product in mind?</span>
          <strong>Let’s build it together.</strong>
          <LuArrowUpRight aria-hidden="true" />
        </Link>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectDetail
