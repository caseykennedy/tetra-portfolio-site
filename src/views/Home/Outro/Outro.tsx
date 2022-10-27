// Outro:

import * as React from 'react'
import { motion } from 'framer-motion'

// Components
import Icon from '../../../components/Icons'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const mailTo = 'mailto:taylor@tetrashapes.com'

const Outro = () => {
  const nevadaTime = useDate()
  return (
    <S.Outro>
      {/* <div className="billboard">
        <h2>
          We build blockchain dApps and design future-proof crypto brands. Reach
          out if you have a project or idea you&apos;d like to discuss.
        </h2>
      </div> */}
      <div className="meta">
        <div>
          <h4>contact</h4>
          <br />
          <a href={mailTo} target="_blank" rel="noreferrer">
            info@tetrashapes.com
          </a>
        </div>
        <div>
          <h4>social</h4>
          <br />
          <a href="/" target="_blank" rel="noopener">
            GitHub
          </a>
          <a href="/" target="_blank" rel="noopener">
            Dribbble
          </a>
          <a href="/" target="_blank" rel="noopener">
            LinkedIn
          </a>
        </div>
      </div>
    </S.Outro>
  )
}

export default Outro
