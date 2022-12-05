// HomeView:

import * as React from 'react'

// Hooks
import useSiteSettings from '../../hooks/useSiteSettings'

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

const Home = () => {
  const site = useSiteSettings()
  return (
    <S.Home>
      <Hero />

      <Section border={true}>
        <Projects />
      </Section>

      <Section bg="var(--color-bg-blur)" border={true}>
        <Intro />
      </Section>

      <Section bg="var(--color-bg-blur)" border={true}>
        <Services />
      </Section>

      <Section border={true} pt="0" pr="0" pb="0" pl="0">
        <Marquee direction="left" speed={60}>
          <div>
            If you are interested in working together, please{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              email us ✌️
            </a>
          </div>
          <div>
            We are currently considering new work for 2023,{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              reach out 🌞
            </a>
          </div>
          <div>
            If your project is aimed at crypto or decentralization, is
            open-sourced, sustainable or educational,{' '}
            <a
              href={site.mailTo}
              target="_blank"
              rel="noreferrer"
              className="link e-resize"
            >
              let&apos;s work together 🤝
            </a>
          </div>
        </Marquee>
      </Section>

      <Section bg="var(--color-bg-blur)" border={true}>
        <Team />
      </Section>

      <Section border={true}>
        <DribbbleGrid />
      </Section>
    </S.Home>
  )
}

export default Home
