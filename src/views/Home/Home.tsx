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

// const Capabilities = () => (
//   <Section>
//     <S.Capabilities>
//       <h4>Capabilities</h4>
//       <div>web | app dev</div>
//       <div>ui + ux</div>
//       <div>design systems</div>
//       <div>wireframing</div>
//       <div>prototyping</div>
//     </S.Capabilities>
//   </Section>
// )

const Home = () => (
  <S.Home>
    <Hero />
    <Marquee speed={50}>
      <div>something</div>
      <div>statement</div>
      <div>idea</div>
      <div>ideaology</div>
      <div>vision</div>
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
