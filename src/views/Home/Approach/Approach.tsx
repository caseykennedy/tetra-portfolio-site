// Approach:

import * as React from 'react'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Approach = () => {
  const nevadaTime = useDate()
  return (
    <S.Approach>
      <div className="heading">
        <p>
          Our approach is casual, conversational, direct and transformative.
        </p>
      </div>
      <div className="message">
        <p className="lead">
          Our process begins committing ourselves to understanding you—your
          mission, challenges, industry, customers and competitors, from the
          inside out. Speaking &quot;it&quot; like you do. We then work to
          reverse engineer your vision &amp; goals into a simple, highly
          informed, foundational, in-demand digital entity and experience.
        </p>

        <p className="lead">
          Our goal: coherent, connective, launch-ready precision. Projects that
          won&apos;t have to be replaced—only upgraded. Delivering from a
          responsive, responsible and systematic creative process that is as
          innovative as it is original. Forming partnerships of value, trust,
          and fluency—built for the long term.
        </p>
      </div>
    </S.Approach>
  )
}

export default Approach
