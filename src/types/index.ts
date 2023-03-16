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

export type ProjectShape = {
  category: string
  client: string
  color: string
  cover: {
    name: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  desc: string
  id: string
  industry: string
  parent: {
    modifiedTime: string
    birthTime: string
  }
  process: string[]
  repository: string
  services: string[]
  slug: string
  tagline: string
  tasks: string[]
  website: string
  year: string
}

export type ProjectShapeShort = {
  desc: string
  id: string
  slug: string
  client: string
  cover: {
    name: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export type ProjectDataShape = {
  data: {
    project: ProjectShape
    images: {
      edges: ImageNode[]
    }
  }
  pageContext: {
    id: string
    slug: string
    previous: {
      desc: string
      id: string
      slug: string
      client: string
      cover: {
        name: string
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
    next: {
      desc: string
      id: string
      slug: string
      client: string
      cover: {
        name: string
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

export type ProjectHookShape = {
  projects: {
    edges: {
      node: ProjectShape
      previous: ProjectShapeShort
      next: ProjectShapeShort
    }[]
  }
}

export type PrevNextShape = {
  pageContext: {
    id: string
    slug: string
    previous: ProjectShapeShort
    next: ProjectShapeShort
  }
}
