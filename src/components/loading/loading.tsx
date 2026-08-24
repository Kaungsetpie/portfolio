import type { CSSProperties } from 'react'
import { useEffect } from 'react'
import appLogo from '../../assets/app-logo.png'
import './loading.css'

type LoadingProps = {
  onComplete: () => void
}

const introduction =
  'Step into a collection of thoughtful digital experiences, selected projects, and the ideas that shape my creative journey.'

function Loading({ onComplete }: LoadingProps) {
  useEffect(() => {
    const loadingTimer = window.setTimeout(onComplete, 1800)

    return () => window.clearTimeout(loadingTimer)
  }, [onComplete])

  return (
    <div className="loading-page" role="status" aria-live="polite">
      <header className="loading-navbar">
        <img
          className="loading-logo"
          src={appLogo}
          alt="Kaung Set Paing logo"
        />
      </header>

      <main className="loading-content">
        <h1 aria-label="Welcome to My Portfolio">
          <span className="loading-heading-line loading-heading-line-first">
            Welcome to My
          </span>
          <span className="loading-heading-line loading-heading-line-second">
            Portfolio
          </span>
        </h1>
        <p>
          {introduction.split(' ').map((word, index) => (
            <span
              className="loading-word"
              style={{ '--word-index': index } as CSSProperties}
              key={`${word}-${index}`}
            >
              {word}{' '}
            </span>
          ))}
        </p>
      </main>
    </div>
  )
}

export default Loading
