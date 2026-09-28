import { useState, type FormEvent } from 'react'
import { LuArrowUpRight, LuCheck, LuLoaderCircle } from 'react-icons/lu'
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa6'
import useScrollReveal from '../../hooks/useScrollReveal'
import './contact.css'

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kaung-set-paing-921267322', icon: FaLinkedinIn },
  { name: 'GitHub', url: 'https://github.com/Kaungsetpie', icon: FaGithub },
  { name: 'Telegram', url: 'https://t.me/kaungset233', icon: FaTelegram },
]

function Contact() {
  const { elementRef, isVisible } = useScrollReveal()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    try {
      const form = event.currentTarget
      const formData = new FormData(form)
      formData.append('access_key', 'e330a618-2474-4514-8c30-b7af72906bd3')
      formData.append('from_name', 'Kaung Set Paing Portfolio')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json() as { success?: boolean }

      if (!response.ok || !result.success) throw new Error('Message was not sent')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      className={`contact-section scroll-section${isVisible ? ' is-visible' : ''}`}
      id="contact"
      ref={elementRef}
    >
      <div className="contact-intro">
        <p className="section-eyebrow">Let’s Connect</p>
        <h2>Have a project in mind?<br />Let’s build it together.</h2>
        <p className="contact-copy">Tell me a little about your idea, timeline, or challenge. I’ll get back to you as soon as possible.</p>
        <p className="contact-availability"><span aria-hidden="true" /> Available for selected projects</p>
        <div className="contact-socials" aria-label="Social profiles">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              href={url}
              className="contact-social-link"
              aria-label={`Visit ${name}`}
              target="_blank"
              rel="noreferrer"
              key={name}
            >
              <Icon aria-hidden="true" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>

      <form className="contact-form" onSubmit={sendEmail}>
        <div className="contact-field-row">
          <label><span>Your name</span><input type="text" name="user_name" placeholder="John Smith" autoComplete="name" required /></label>
          <label><span>Email address</span><input type="email" name="user_email" placeholder="john@example.com" autoComplete="email" required /></label>
        </div>
        <label><span>Subject</span><input type="text" name="subject" placeholder="Website development" required /></label>
        <label><span>Tell me about your project</span><textarea name="message" rows={5} placeholder="Project goals, timeline, and anything else I should know..." required /></label>
        <input className="contact-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className="contact-form-footer">
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? <><LuLoaderCircle className="contact-spinner" aria-hidden="true" /> Sending</> : status === 'success' ? <><LuCheck aria-hidden="true" /> Message sent</> : <>Send message <LuArrowUpRight aria-hidden="true" /></>}
          </button>
          <p className={`contact-status ${status}`} aria-live="polite">
            {status === 'success' && 'Thanks — your message is on its way.'}
            {status === 'error' && 'Unable to send right now. Please try again later.'}
          </p>
        </div>
      </form>
    </section>
  )
}

export default Contact
