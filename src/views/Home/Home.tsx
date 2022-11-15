// HomeView:

import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import Section from '../../components/Section'
import DribbbleGrid from '../../components/DribbbleGrid'
import Marquee from '../../components/Marquee'

// Sections
import Hero from './Hero'
import Intro from './Intro'
import Projects from './Projects'
import Services from './Services'
import Team from './Team'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Home = () => (
  <S.Home>
    <Hero />

    <Marquee speed={50}>
      <div>
        We don&apos;t strive to be the best design studio in the world—just the
        best one for you.
      </div>
      <div>
        We engineer seamless brands that blend digital and analog, with an
        approach grounded in insight, built on collaboration and executed with
        detail.
      </div>
    </Marquee>

    <Section border={true}>
      <Projects />
    </Section>

    <Section bg="var(--color-bg-blur)" border={true}>
      <Intro />
    </Section>

    <Section bg="var(--color-bg-blur)" border={true}>
      <Services />
    </Section>

    <Section bg="var(--color-bg-blur)" border={true}>
      <Team />
    </Section>

    <Section border={true}>
      <DribbbleGrid />
    </Section>
  </S.Home>
)

export default Home
