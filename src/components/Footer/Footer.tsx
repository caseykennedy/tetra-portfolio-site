// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'

// Components
import Icon from '../Icons'
import Section from '../Section'

// ___________________________________________________________________

const mailTo = 'mailto:info@tetrashapes.com'
const twitterURL = 'https://twitter.com/tetrashapes'
const handshakeURL = 'https://handshake.org'
const discordURL = 'https://discord.gg/8qZ7Y4'

type FooterProps = {
  location: {
    pathname: string
  }
}

const Footer = ({ location }: FooterProps) => {
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
          <a href={mailTo} className="btn btn--primary">
            Email us
            <Icon name="arrow" className="icon" />
          </a>
        </div>
        <div className="contact__details">
          {/* <div>
            west coast based
            <br />
            <span>{nevadaTime}</span>
          </div> */}
          <div>
            email
            <br />
            <a href={mailTo} target="_blank" rel="noreferrer" className="link">
              info@tetrashapes.com
            </a>
          </div>
        </div>
      </div>

      <div className="utils">
        <button
          type="button"
          onClick={scrollTop}
          className="control control__top"
        >
          top
        </button>
        {!isIndex && (
          <Link to="/" className="control control__index">
            index
          </Link>
        )}
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
