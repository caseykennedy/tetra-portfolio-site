// Capabilities:

import * as React from 'react'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const data = [
  {
    discipline: `Strategy`,
    description: `It's not so much what you do, it's how you do it. The story is everything. The audience is key. Who, why and where? Give us a task, we'll provide the plan, the map, and the way.`,
    capabilities: [
      'Audience analysis',
      'Brand architecture',
      'Brand positioning',
      'Competitive analysis',
      'Design principles',
      'Naming and nomenclature',
      'Research and insights',
    ],
  },
  {
    discipline: `Branding`,
    description: `A brand is a living feeling—a being, if you will. That's why we take our design-thinking seriously. Ensuring you have a unique, intelligent and desirable brand to present to the world.`,
    capabilities: [
      'Art direction',
      'Brand guidelines',
      'Brand identity',
      'Campaign design',
      'Brand design systems',
      'Print & packaging design',
      'Type design',
      'Verbal identity',
    ],
  },
  {
    discipline: `Digital`,
    description: `We're out to make the internet a better place. Respecting the user and end-result of every interaction, we aim for seamless and smart. Whatever it is—we’ll build it with care.`,
    capabilities: [
      'Digital design systems',
      'Information architecture',
      'ui+ux design',
      'Product design',
      'Wireframing',
      'Prototyping',
      'User journey mapping',
      'Ad design',
    ],
  },
  {
    discipline: `Technology`,
    description: `We build state-of-the-art tech experiences, not only engineered with business needs in mind, but geared towards user experience and fluid interaction.`,
    capabilities: [
      'Web / App development',
      'web3 / dApp',
      'eCommerce',
      'CMS integration',
      'API integration',
      'Ad development',
    ],
  },
]

const Capabilities = () => (
  <S.Capabilities>
    <div className="heading">
      <p>
        We are capable of working across four disciplines; strategy, branding,
        digital and technology.
      </p>
    </div>
    <div className="service-grid">
      {data.map((service, idx) => (
        <div className="service" key={idx}>
          <div className="service__figure">
            <div className="service__id">{idx}</div>
            <div className="service__name">{service.discipline}</div>
          </div>
          <p className="small">{service.description}</p>
          <ul>
            {service.capabilities.map((cap, id) => (
              <li key={id}>{cap}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </S.Capabilities>
)

export default Capabilities
