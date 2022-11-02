// MobileNav:
// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

// import theme from '../../../styles/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.035, delayChildren: 0.03 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

type NavProps = {
  handleExitOnClick: () => void
  isOpen: boolean
}

const Overlay = ({ handleExitOnClick, isOpen }: NavProps) => (
  <motion.div initial="closed" animate={isOpen ? 'open' : 'closed'}>
    <S.Overlay variants={listVariants}>
      <div className="content">
        <button type="button" onClick={handleExitOnClick} className="exit">
          exit
        </button>
        <motion.div variants={itemVariants}>mission</motion.div>
        <motion.div variants={itemVariants}>aim</motion.div>
        <motion.div variants={itemVariants}>manifesto</motion.div>
        <motion.div variants={itemVariants}>process</motion.div>
        <motion.div variants={itemVariants}>capabilities</motion.div>
        <motion.div variants={itemVariants}>team</motion.div>
      </div>
      {/* {routes.map((item, idx) => (
        <NavLink key={idx} handleExitOnClick={handleExitOnClick} item={item} />
      ))} */}
    </S.Overlay>
  </motion.div>
)

export default Overlay
