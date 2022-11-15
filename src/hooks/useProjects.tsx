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
                  layout: FULL_WIDTH
                  formats: [AUTO, AVIF, WEBP]
                  placeholder: DOMINANT_COLOR
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
                  layout: FULL_WIDTH
                  formats: [AUTO, AVIF, WEBP]
                  placeholder: DOMINANT_COLOR
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
                  layout: FULL_WIDTH
                  formats: [AUTO, AVIF, WEBP]
                  placeholder: DOMINANT_COLOR
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
