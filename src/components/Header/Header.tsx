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
  const { toggle } = useDarkMode(true)
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)

  return (
    <>
      <S.Header>
        <div className="logo">
          <div className="symbol">
            <Link to="/" aria-label="Back to index page">
              tetra/
            </Link>
          </div>
        </div>

        <div className="utils">
          <button type="button" onClick={toggleMenu} className="info-toggle">
            info
          </button>
          <button type="button" onClick={toggle} className="theme-toggle">
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
