// Footer:

// ___________________________________________________________________

import * as React from 'react'

// Theme + UI
import * as S from './styles.scss'

// Components
import Icon from '../Icons'

// ___________________________________________________________________

const mailTo = 'mailto:taylor@tetrashapes.com'
const twitterHref = 'https://twitter.com/tetrashapes'
const handshakeHref = 'https://handshake.org'

const Footer = () => (
  <S.Footer>
    <div className="message">
      <div>Tell us about your project.</div>
      <a href="/#" className="btn btn--outline">
        email
      </a>
    </div>
    {/* <div className="title">
      <p>
        Approach
        <span>Our process is casual and conversational.</span>
      </p>
    </div> */}
  </S.Footer>
)

export default Footer
