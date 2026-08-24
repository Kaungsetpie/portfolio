
import type { CSSProperties } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import useScrollReveal from '../../hooks/useScrollReveal'
import './experience.css'

const experiences = [
  { period: '2022 — Present', role: 'Freelance Developer', company: 'Independent', summary: 'Designing and developing reliable web and mobile products—from early ideas and interfaces to APIs, deployment, and ongoing improvements.', skills: ['React', 'React Native', 'TypeScript', 'Node.js'] },
  { period: 'Project-based', role: 'Full-stack Developer', company: 'Client Projects', summary: 'Building complete, maintainable applications with responsive frontends, secure backend services, database integrations, and practical cloud delivery.', skills: ['Spring Boot', 'REST APIs', 'PostgreSQL', 'Cloud'] },
  { period: 'Continuous', role: 'Product & UI Engineer', company: 'Personal Projects', summary: 'Turning product concepts into polished prototypes while exploring better interaction patterns, performance, accessibility, and developer workflows.', skills: ['Product Design', 'UI/UX', 'Performance', 'Git'] },
]

function Experience() {
  const { elementRef, isVisible } = useScrollReveal(0.08)
  return (
    <section className={`experience-section${isVisible ? ' is-visible' : ''}`} id="experience" ref={elementRef}>
      <div className="experience-heading">
        <div><p className="section-eyebrow">Experience</p><h2>Building useful products,<br />one challenge at a time.</h2></div>
        <p className="experience-intro">More than three years of hands-on work across web, mobile, backend, and product development.</p>
      </div>
      <ol className="experience-list" aria-label="Professional experience">
        {experiences.map((experience, index) => (
          <li className="experience-item" key={`${experience.role}-${experience.company}`} style={{ '--experience-index': index } as CSSProperties}>
            <span className="experience-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <p className="experience-period">{experience.period}</p>
            <div className="experience-details">
              <p className="experience-company">{experience.company}</p><h3>{experience.role}</h3>
              <p className="experience-summary">{experience.summary}</p>
              <ul className="experience-skills" aria-label={`${experience.role} skills`}>{experience.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
            <FiArrowUpRight className="experience-arrow" aria-hidden="true" />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
