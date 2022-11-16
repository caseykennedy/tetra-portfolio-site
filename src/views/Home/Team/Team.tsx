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
    bio: `Casey is just this guy, you know? Designer, developer, friend. Actively exploring visual design, technology and inner space ✌️`,
  },
  {
    id: 1,
    name: `chris`,
    position: `creative`,
    experience: '16',
    bio: `I dont like my chickens alive, I like em dead and deep fried. You ever heard of Popeyes?`,
  },
  {
    id: 2,
    name: `taylor`,
    position: `strategy`,
    experience: '15',
    bio: `bio bio bio.`,
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
            <p className="small">
              <a href="/#" target="_blank" rel="nofollow" className="link">
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
