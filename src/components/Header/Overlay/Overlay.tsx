// MobileNav:
// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import { polyVariant, staggerItems } from '../../../utils/variants'

import * as S from './styles.scss'

// ___________________________________________________________________

type NavProps = {
  handleExitOnClick: () => void
  isOpen: boolean
}

const Overlay = ({ handleExitOnClick, isOpen }: NavProps) => (
  <motion.div initial="hidden" animate={isOpen ? 'visible' : 'hidden'}>
    <S.Overlay variants={staggerItems}>
      <div className="content">
        <button type="button" onClick={handleExitOnClick} className="exit">
          exit
        </button>
        <motion.div variants={polyVariant}>mission</motion.div>
        <motion.div variants={polyVariant}>aim</motion.div>
        <motion.div variants={polyVariant}>process</motion.div>
        <motion.div variants={polyVariant}>capabilities</motion.div>
      </div>
      {/* {routes.map((item, idx) => (
        <NavLink key={idx} handleExitOnClick={handleExitOnClick} item={item} />
      ))} */}
    </S.Overlay>
  </motion.div>
)

export default Overlay
