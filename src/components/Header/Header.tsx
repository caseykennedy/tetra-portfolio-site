// Header
// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

// Components
import MobileNav from './MobileNav'
import Modal from '../Modal'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Header = () => {
  const [theme, setTheme] = useState('lightMode')
  const [isNavOpen, setNavOpen] = useState(false)

  const toggleMenu = () => setNavOpen(!isNavOpen)
  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'lightMode' : 'default')
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      document.documentElement.setAttribute('data-theme', localTheme)
    }
  }, [])

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
          <button
            type="button"
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
            className="info-toggle"
          >
            info
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            onKeyDown={toggleTheme}
            className="theme-toggle"
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
