// Team:

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
    name: `casey`,
    title: `technology`,
    bio: `Casey is just this guy, you know? Designer, developer, aspiring time-traveler. Actively exploring visual design, technology and inner space ✌️`,
  },
  {
    id: 1,
    name: `chris`,
    title: `creative`,
    bio: `I dont like my chickens alive, I like em dead and deep fried. You ever heard of Popeyes?`,
  },
  {
    id: 2,
    name: `taylor`,
    title: `strategy`,
    bio: `Some some some.`,
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

const Team = () => {
  const nevadaTime = useDate()
  return (
    <S.Team>
      <div className="title">
        <p>
          Team
          <span>Working towards a decentralized future.</span>
        </p>
      </div>
      <div className="team-grid">
        {data.map((service, idx) => (
          <div className="partner" key={idx}>
            <p className="name">
              {service.name}
              <span className="title">{service.title}</span>
            </p>
            <p className="small">{service.bio}</p>
            <p className="small">
              <a href="/#" target="_blank" rel="nofollow">
                LinkedIn
              </a>
            </p>
          </div>
        ))}
      </div>
    </S.Team>
  )
}

export default Team
