import { useEffect, useState } from 'react'
import { LuArrowUp } from 'react-icons/lu'
import './scroll-to-top.css'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 500)

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      className={`scroll-to-top${isVisible ? ' is-visible' : ''}`}
      type="button"
      aria-label="Scroll back to top"
      title="Back to top"
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
    >
      <LuArrowUp aria-hidden="true" />
    </button>
  )
}

export default ScrollToTop
