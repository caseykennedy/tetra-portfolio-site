// Team:

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

type TeamShape = {
  team: {
    edges: {
      node: {
        avatar: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
        bio: string
        experience: string
        id: string
        name: string
        position: string
      }
    }[]
  }
}

const Team = () => {
  const data: TeamShape = useStaticQuery(graphql`
    query AllTeamQuery {
      team: allTeamYaml {
        edges {
          node {
            avatar {
              childImageSharp {
                gatsbyImageData(
                  backgroundColor: "transparent"
                  formats: WEBP
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                  quality: 50
                )
              }
            }
            bio
            experience
            id
            name
            position
          }
        }
      }
    }
  `)
  const team = data.team.edges
  return (
    <S.Team>
      <div className="title">
        <p>
          Core team
          <span>At your service.</span>
        </p>
      </div>
      <div className="team-grid">
        {team.map(({ node: person }) => (
          <div className="partner" key={person.id}>
            <div className="partner__meta">
              <div className="partner__meta__avatar">
                <GatsbyImage
                  image={person.avatar.childImageSharp.gatsbyImageData}
                  alt={person.name}
                  objectFit="cover"
                />
              </div>
              <div className="partner__meta__person">
                <div className="partner__meta__name">{person.name}</div>
                <div className="partner__meta__position">
                  <div>{person.position}</div>
                  <div>{person.experience} years xp</div>
                </div>
              </div>
            </div>
            <p className="small">{person.bio}</p>
          </div>
        ))}
      </div>
    </S.Team>
  )
}

export default Team
