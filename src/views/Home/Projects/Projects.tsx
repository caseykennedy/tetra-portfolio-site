// Projects:

import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

// Hooks
import useProjects from '../../../hooks/useProjects'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const imageVariants = {
  large: {
    scale: 1.075,
    transition: {
      scale: {
        stiffness: 400,
        velocity: -400,
        duration: 0.65,
        ease: 'easeOut',
      },
    },
  },
  small: {
    scale: 1,
    transition: {
      transform: {
        stiffness: 400,
        velocity: -400,
        duration: 0.55,
        ease: 'easeOut',
      },
    },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.03 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const Projects = () => {
  const projects = useProjects()
  console.log('projects', projects)

  return (
    <S.Projects>
      <div className="project-grid">
        {projects.map(({ node: item }) => (
          <motion.div
            initial="closed"
            whileHover="open"
            animate="closed"
            key={item.id}
            className="project"
          >
            <Link to={`/projects/${item.slug}`}>
              <motion.div
                variants={imageVariants}
                initial="small"
                whileHover="large"
                animate="small"
                className="project__item"
              >
                <GatsbyImage
                  image={item.cover.childImageSharp.gatsbyImageData}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt="alt"
                  className="project__figure"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="project__meta">
                <div className="title">
                  <span>
                    <strong>{item.title}</strong>
                  </span>
                </div>
                <motion.ul variants={listVariants}>
                  {item.services.map((service, idx) => (
                    <motion.li variants={itemVariants} key={idx}>
                      {service} /
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </S.Projects>
  )
}

export default Projects
