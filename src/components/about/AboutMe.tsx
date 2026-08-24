import type { CSSProperties } from 'react'
import type { IconType } from 'react-icons'
import { FaCloud, FaJava, FaPlug } from 'react-icons/fa6'
import {
  SiCss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import aboutPortrait from '../../assets/about-portrait.png'
import useScrollReveal from '../../hooks/useScrollReveal'
import './about.css'

type Skill = {
  name: string
  icon: IconType
}

const skills: Skill[] = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'React Native', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'Java EE', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'PHP', icon: SiPhp },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'REST APIs', icon: TbApi },
  { name: 'API Integration', icon: FaPlug },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Postman', icon: SiPostman },
  { name: 'Linux', icon: SiLinux },
  { name: 'Cloud Deployment', icon: FaCloud },
]

function AboutMe() {
  const { elementRef: sectionRef, isVisible } = useScrollReveal(0.06)
  const { elementRef: skillsRef, isVisible: areSkillsVisible } =
    useScrollReveal<HTMLDivElement>(0.05)

  return (
    <section
      className={`about-section${isVisible ? ' is-visible' : ''}`}
      id="about"
      ref={sectionRef}
    >
      <div className="about-portrait-wrap">
        <img
          className="about-portrait"
          src={aboutPortrait}
          alt="Portrait of Kaung Set Paing"
        />
      </div>

      <div className="about-content">
        <p className="about-eyebrow">About Me</p>
        <h2>Building digital experiences with purpose and precision.</h2>

        <div className="about-copy">
          <p>
            I’m Kaung Set Paing, a professional web and mobile application
            developer focused on creating modern, reliable, and thoughtfully
            designed digital products. With more than three years of freelance
            experience, I turn ideas into clean, intuitive experiences that
            balance strong engineering with careful attention to detail.
          </p>
          <p>
            A graduate of the University of Computer Studies, Mandalay, I bring
            a solid technical foundation and a practical, growth-focused
            approach to every project.
          </p>
        </div>

        <div className="about-details" aria-label="Professional highlights">
          <div>
            <span>Experience</span>
            <strong>3+ Years Freelance</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>Web &amp; Mobile Apps</strong>
          </div>
        </div>
      </div>

      <div
        className={`about-skills${areSkillsVisible ? ' is-visible' : ''}`}
        id="skills"
        ref={skillsRef}
      >
        <div className="skills-heading">
          <p className="about-eyebrow">Technical Skills</p>
          <h3>My technology stack.</h3>
        </div>

        <ul className="skills-grid" aria-label="Technical skills">
          {skills.map(({ name, icon: Icon }, index) => (
            <li
              className="skill-item"
              key={name}
              style={{ '--skill-index': index } as CSSProperties}
            >
              <Icon aria-hidden="true" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutMe
