// Services:

import * as React from 'react'
import { motion } from 'framer-motion'

// Components
import Icon from '../../../components/Icons'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const data = [
  {
    id: 0,
    discipline: `Strategy`,
    description: `We immerse ourselves into an organisation to identify insights across brand, product and technology.`,
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
    id: 1,
    discipline: `Branding`,
    description: `We build dynamic, distinct brands that transform how businesses
    connect with their audiences.`,
    capabilities: [
      'Art direction',
      'Brand guidelines',
      'Brand identity',
      'Campaign design',
      'Design systems',
      'Motion design',
      'Print & packaging design',
      'Type design',
      'Verbal identity',
    ],
  },
  {
    id: 2,
    discipline: `Digital`,
    description: `We channel insights into elegant, engaging digital experiences that make the internet a better place.`,
    capabilities: [
      'Digital design systems',
      'Information architecture',
      'UI+UX design',
      'Product design',
      'Wireframing / Prototyping',
      'User journey mapping',
    ],
  },
  {
    id: 3,
    discipline: `Technology`,
    description: `We engineer state-of-the-art experiences that respond to business needs and user expectations.`,
    capabilities: [
      'Web / App development',
      'web3 / dApp',
      'eCommerce',
      'CMS integration',
      'API integration',
    ],
  },
]

// const Service = () => (
//   <>
//     {data.map((service, idx) => (
//       <div className="service" key={idx}>
//         <div className="service__figure">
//           <div className="integer">{service.id}</div>
//           <div className="name">{service.discipline}</div>
//         </div>
//         <p className="small">{service.description}</p>
//         <ul>
//           {service.capabilities.map((cap, id) => (
//             <li key={id}>{cap}</li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </>
// )

const Services = () => {
  const nevadaTime = useDate()
  return (
    <S.Services>
      <div className="title">
        <p>
          What we do
          <span>
            We work across four disciplines; strategy, branding, digital and
            technology.
          </span>
        </p>
      </div>
      <div className="service-grid">
        {data.map((service, idx) => (
          <div className="service" key={idx}>
            <div className="service__figure">
              <div className="integer">{service.id}</div>
              <div className="name">{service.discipline}</div>
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
    </S.Services>
  )
}

export default Services