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
            color
            desc
            id
            images
            industry
            services
            slug
            title
            tagline
            website
            year
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
          previous {
            desc
            id
            slug
            title
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
            desc
            id
            slug
            title
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
