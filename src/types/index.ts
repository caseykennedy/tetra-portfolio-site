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

export type ProjectShapeShort = {
  desc: string
  id: string
  slug: string
  title: string
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
      title: string
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
      title: string
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
