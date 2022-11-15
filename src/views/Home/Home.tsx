// HomeView:

import * as React from 'react'

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

    <Marquee speed={40}>
      {/* <div>
        We don&apos;t strive to be the best design studio in the world—just the
        best one for you.
      </div>
      <div>
        We engineer seamless brands that blend digital and analog, with an
        approach grounded in insight, built on collaboration and executed with
        detail.
      </div> */}
      <div>Grounded collaboration.</div>
      <div>Digital alchemists.</div>
      <div>Design is problem solving.</div>
      <div>No stone left unturned.</div>
      <div>Flexible approach.</div>
      <div>Vision to reality.</div>
      <div>Action with intention.</div>
      <div>We&apos;re in this together.</div>
      <div>Impeccable communication.</div>
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
