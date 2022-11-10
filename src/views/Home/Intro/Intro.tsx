// Aim:

import * as React from 'react'
import { motion } from 'framer-motion'

// Components
import Icon from '../../../components/Icons'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Intro = () => {
  const nevadaTime = useDate()
  return (
    <S.Intro>
      <div className="title">
        <p>
          Approach
          <span>Our process is casual and conversational.</span>
        </p>
      </div>
      <div className="message">
        <p className="lead">
          We get to know our clients personally and are committed to
          understanding their industry, customers and competitors. We develop
          long term client relationships, which fosters trust and fluency that
          flows both ways.
        </p>

        <p className="lead">
          We work across four disciplines: strategy, branding, digital and
          technology, and collaborate with a tight network of animators,
          developers, filmmakers, illustrators and photographers to deliver
          bespoke solutions that meet any brief.
        </p>
      </div>
    </S.Intro>
  )
}

export default Intro
