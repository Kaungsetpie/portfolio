import type { CSSProperties } from 'react'
import { LuArrowUpRight, LuBlocks, LuMonitorSmartphone, LuServerCog, LuSmartphone } from 'react-icons/lu'
import useScrollReveal from '../../hooks/useScrollReveal'
import './services.css'

const services = [
  { number: '01', title: 'Web Development', description: 'Fast, responsive websites and web applications built around your goals, users, and brand.', icon: LuMonitorSmartphone },
  { number: '02', title: 'Mobile Applications', description: 'Thoughtful cross-platform mobile experiences with clean interfaces and reliable performance.', icon: LuSmartphone },
  { number: '03', title: 'Backend Development', description: 'Secure APIs, databases, authentication, and scalable services that keep products running smoothly.', icon: LuServerCog },
  { number: '04', title: 'System Integration', description: 'Practical connections between platforms, third-party services, payments, and business workflows.', icon: LuBlocks },
]

function Services() {
  const { elementRef, isVisible } = useScrollReveal(0.08)

  return (
    <section className={`services-section${isVisible ? ' is-visible' : ''}`} id="services" ref={elementRef}>
      <div className="services-heading">
        <div>
          <p className="section-eyebrow">Services</p>
          <h2>How I can help bring<br />your idea to life.</h2>
        </div>
        <p>I combine product thinking, purposeful design, and solid engineering to create digital experiences that work beautifully.</p>
      </div>

      <div className="services-grid">
        {services.map(({ number, title, description, icon: Icon }, index) => (
          <article className="service-card" key={title} style={{ '--service-index': index } as CSSProperties}>
            <div className="service-card-top">
              <span>{number}</span>
              <Icon aria-hidden="true" />
            </div>
            <div className="service-card-copy">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <LuArrowUpRight className="service-arrow" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
