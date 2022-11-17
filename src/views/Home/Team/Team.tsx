// Team:

import * as React from 'react'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const data = [
  {
    id: 0,
    name: `casey`,
    position: `technology`,
    experience: '14',
    bio: `Not your ordinary developer, Casey has a background in design and has made his way through a broad range of industries including advertising and design, DNS, domain registration, casino and hospitality, and music festivals and events—where deliverables ranged from logos and packaging to websites and blockchain dApps.`,
  },
  {
    id: 1,
    name: `chris`,
    position: `creative`,
    experience: '16',
    bio: `Chris has served as the creative director and lead designer for a wide array of startups, personalities, corporations and foundations. Ranging from gaming to cosmetics, music, fashion, fitness, automotive, health, food and beverage—tech and crypto has been his main focus since 2018.`,
  },
  {
    id: 2,
    name: `taylor`,
    position: `strategy`,
    experience: '15',
    bio: `Taylor has worked in creative production and development for immersive web and mobile advertising campaigns across many industries and brands—blockchain has been his focus since 2015.`,
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
          Core team
          <span>At your service.</span>
        </p>
      </div>
      <div className="team-grid">
        {data.map((person, idx) => (
          <div className="partner" key={idx}>
            <div className="partner__name">{person.name}</div>
            <div className="partner__position">
              <div>{person.position}</div>
              <div>{person.experience} years xp</div>
            </div>
            <p className="small">{person.bio}</p>
            {/* <p className="small">
              <a href="/#" target="_blank" rel="nofollow" className="link">
                LinkedIn
              </a>
            </p> */}
          </div>
        ))}
      </div>
    </S.Team>
  )
}

export default Team
