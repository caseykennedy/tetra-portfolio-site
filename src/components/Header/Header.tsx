// Header
// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useDarkMode } from 'usehooks-ts'

// Components
import MobileNav from './Overlay'
import Modal from '../Modal'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Header = () => {
  const { isDarkMode, toggle } = useDarkMode(true)
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)

  return (
    <>
      <S.Header>
        <div className="logo">
          <Link to="/" aria-label="Back to index page">
            tetra/
          </Link>
        </div>

        <div className="utils">
          {/* <button
            type="button"
            onClick={toggleMenu}
            className="btn btn-outline info-toggle"
          >
            tl;dr
          </button> */}
          <button
            type="button"
            onClick={toggle}
            className={`theme-toggle ${
              isDarkMode ? 'theme-toggle__active' : ''
            }`}
          >
            ◒
          </button>
        </div>
      </S.Header>

      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>
    </>
  )
}

export default Header
