import { useEffect, useRef, useState } from 'react'

function useScrollReveal<T extends HTMLElement = HTMLElement>(threshold = 0.08) {
  const elementRef = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -24px 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold])

  return { elementRef, isVisible }
}

export default useScrollReveal
