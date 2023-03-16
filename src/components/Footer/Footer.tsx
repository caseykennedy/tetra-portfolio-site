// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'

// Hooks
import useSiteSettings from '../../hooks/useSiteSettings'

// Components
import Marquee from '../Marquee'

// ___________________________________________________________________

const twitterURL = 'https://twitter.com/tetrashapes'
const handshakeURL = 'https://handshake.org'
const discordURL = 'https://discord.gg/8qZ7Y4'

type FooterProps = {
  location: {
    pathname: string
  }
}

const Footer = ({ location }: FooterProps) => {
  const site = useSiteSettings()
  const isIndex = location.pathname === '/'
  const scrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    e.preventDefault()
  }
  return (
    <S.Footer>
      <div className="contact">
        <div className="contact__cta">
          <h2 className="text-h1">Let&apos;s build something great.</h2>
        </div>
        <div className="contact__details">
          <div>
            contact
            <br />
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              info@tetrashapes.com
            </a>
          </div>
        </div>
      </div>

      <nav>
        <button type="button" onClick={scrollTop} className="n-resize">
          top
        </button>

        <div className="routes">
          {!isIndex && (
            <Link to="/" className="w-resize">
              home
            </Link>
          )}

          <a
            href={site.mailTo}
            target="_blank"
            rel="noreferrer"
            className="routes__email e-resize"
          >
            email us
          </a>
        </div>
      </nav>

      <div className="footer-marquee">
        <Marquee direction="left" speed={70}>
          <div>
            If you are interested in working together, please{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              email us ✌️
            </a>
          </div>
          <div>
            We are currently considering new work for 2023,{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              reach out 🌞
            </a>
          </div>
          <div>
            If your project is aimed at crypto or decentralization, is
            open-sourced, sustainable or educational,{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              let&apos;s work together 🤝
            </a>
          </div>
        </Marquee>
      </div>

      <div className="info">
        <div className="info__legal">©☻ tetra/</div>
        <div className="info__links">
          <a
            href={twitterURL}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            twitter
          </a>
          <a
            href={discordURL}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            discord
          </a>
          <a
            href={handshakeURL}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            handshake
          </a>
        </div>
      </div>
    </S.Footer>
  )
}

export default Footer
