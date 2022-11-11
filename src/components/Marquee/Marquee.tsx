// Marquee:
// ___________________________________________________________________

import * as React from 'react'
import FastMarquee from 'react-fast-marquee'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  children: React.ReactNode
  speed?: number
}

const Marquee = ({ children, speed = 20 }: Props) => {
  const MarqueeProps = {
    gradient: false,
    pauseOnHover: false,
    speed,
  }
  return (
    <S.Marquee>
      <FastMarquee {...MarqueeProps}>
        {children}
        <div />
      </FastMarquee>
    </S.Marquee>
  )
}

export default Marquee
