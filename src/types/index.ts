import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ImageNode {
  node: {
    name: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

// Dribbble Shape
// ___________________________________________________________________

export type DribbbleShape = {
  content: {
    edges: {
      node: {
        name: string
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }[]
  }
}

// Project Shape
// ___________________________________________________________________

export type ProjectShapeProject = {
  id: string
  tagline: string
  title: string
  color: string
  category: string
  desc: string
  industry: string
  services: string[]
  slug: string
  website: string
  year: string
  parent: {
    modifiedTime: string
    birthTime: string
  }
  cover: {
    name: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export type ProjectShape = {
  data: {
    project: ProjectShapeProject
    images: {
      edges: ImageNode[]
    }
    projects: IProjects
  }
}

export interface IProjects {
  projects: {
    edges: {
      node: ProjectShapeProject
      previous: ProjectShapeProject
      next: ProjectShapeProject
    }[]
  }
}
