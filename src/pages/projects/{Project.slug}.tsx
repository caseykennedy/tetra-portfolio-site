// Post:
// ___________________________________________________________________

import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../../components/SEO'
import ProjectDetail from '../../templates/ProjectDetail'

import { ProjectShape } from '../../types'

// ___________________________________________________________________

const ProjectPage = (props: ProjectShape) => {
  const { data } = props
  const { project } = data
  return (
    <>
      <SEO
        pathname={project.slug}
        title={`${project.tagline} | tetra`}
        desc={project.desc}
        node={project.parent}
      />
      <ProjectDetail data={data} />
    </>
  )
}

export default ProjectPage

// ___________________________________________________________________

export const query = graphql`
  query ($id: String!, $slug: String!) {
    project(id: { eq: $id }) {
      category
      color
      cover {
        name
        childImageSharp {
          gatsbyImageData(
            aspectRatio: 1.444
            backgroundColor: ""
            formats: WEBP
            layout: FULL_WIDTH
            placeholder: DOMINANT_COLOR
          )
        }
      }
      desc
      id
      images
      industry
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
      services
      slug
      title
      tagline
      website
      year
    }
    images: allFile(filter: { relativeDirectory: { eq: $slug } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(
              # aspectRatio: 1.444
              backgroundColor: ""
              formats: WEBP
              layout: FULL_WIDTH
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
    projects: allProject(filter: { slug: { eq: $slug } }) {
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
`
