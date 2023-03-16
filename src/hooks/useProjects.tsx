// useProjects hook

import { graphql, useStaticQuery } from 'gatsby'
import { ProjectHookShape } from '../types'

// ___________________________________________________________________

const useProjects = () => {
  const data = useStaticQuery<ProjectHookShape>(graphql`
    query AllProjectsQuery {
      projects: allProjectsYaml {
        edges {
          node {
            category
            client
            color
            cover {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  backgroundColor: "transparent"
                  formats: WEBP
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                  quality: 50
                )
              }
            }
            desc
            id
            industry
            process
            repository
            services
            slug
            tagline
            tasks
            website
            year
          }
          previous {
            client
            desc
            id
            slug
            cover {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  backgroundColor: "transparent"
                  formats: WEBP
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                  quality: 50
                )
              }
            }
          }
          next {
            client
            desc
            id
            slug
            cover {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  backgroundColor: "transparent"
                  formats: WEBP
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                  quality: 50
                )
              }
            }
          }
        }
      }
    }
  `)

  return data.projects.edges
}

export default useProjects
