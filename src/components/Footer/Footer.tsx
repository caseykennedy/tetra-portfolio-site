// Footer:

// ___________________________________________________________________

import * as React from 'react'

// Hooks
import useDate from '../../hooks/useDate'

// Theme + UI
import * as S from './styles.scss'

// Components
import Icon from '../Icons'

// ___________________________________________________________________

const mailTo = 'mailto:info@tetrashapes.com'
const twitterHref = 'https://twitter.com/tetrashapes'
const handshakeHref = 'https://handshake.org'

const Footer = () => {
  const nevadaTime = useDate()
  return (
    <S.Footer>
      <div className="contact">
        <div className="contact__cta">
          <h2 className="text-h1">Let&apos;s talk about your project.</h2>
          <a href={mailTo} className="btn btn--primary">
            Email us
            <Icon name="arrow" className="icon" />
          </a>
        </div>
        <div className="contact__details">
          <div>
            west coast based
            <br />
            <span>{nevadaTime}</span>
          </div>
          <div>
            email
            <br />
            <a href={mailTo} target="_blank" rel="noreferrer" className="link">
              info@tetrashapes.com
            </a>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info__legal">
          &copy; Tetrashapes {new Date().getFullYear()}
        </div>
        <div className="info__links">
          <a
            href="https://github.com/caseykennedy"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            twitter
          </a>
          <a
            href="https://github.com/caseykennedy"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            discord
          </a>
          <a
            href="https://github.com/caseykennedy"
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
