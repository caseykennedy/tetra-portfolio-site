// ProjectDetail:
// ___________________________________________________________________

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ProjectShape, ImageNode } from '../../types'
import * as S from './styles.scss'
import Section from '../../components/Section'

// ___________________________________________________________________

type GalleryProps = {
  images: ImageNode[]
}

const Gallery = ({ images }: GalleryProps) => {
  console.log('images:', images)
  return (
    <S.Gallery>
      {images.map(({ node: item }, idx) => (
        <GatsbyImage
          image={item.childImageSharp.gatsbyImageData}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="alt"
          key={idx}
        />
      ))}
    </S.Gallery>
  )
}

const ProjectDetail = ({ data }: ProjectShape) => {
  const images = data.images.edges || []
  return (
    <S.ProjectDetail>
      <Section>
        <h1>
          {data.project.title}
          <span>{data.project.tagline}</span>
        </h1>
      </Section>

      <Section border={false}>
        <Gallery images={images} />
      </Section>

      <Section border={true}>
        <div className="details">
          <h2 className="text-h3">Project details</h2>
          <div className="details__summary">
            <p>{data.project.desc}</p>
            <div className="details__meta">
              <div className="details__meta__col">
                <div>
                  Clients
                  <span>{data.project.title}</span>
                </div>
                <div>
                  Year
                  <span>{data.project.year}</span>
                </div>
              </div>
              <div className="details__meta__col">
                <div>
                  Industry
                  <span>{data.project.industry}</span>
                </div>
                <div>
                  Disciplines
                  {data.project.services.map((service, idx) => (
                    <span key={idx}>{service}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* <div>
          {data.project.services.map((service, idx) => (
            <span key={idx} className="pill">
              {service}
            </span>
          ))}
        </div> */}
    </S.ProjectDetail>
  )
}

export default ProjectDetail
