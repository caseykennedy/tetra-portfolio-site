// Header
// ___________________________________________________________________

import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { useDarkMode } from 'usehooks-ts'

// Components
// import MobileNav from './Overlay'
// import Modal from '../Modal'
import Symbol from '../SVG/Symbol'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Header = () => {
  const { isDarkMode, toggle } = useDarkMode(true)
  // const [isNavOpen, setNavOpen] = useState(false)
  // const toggleMenu = () => setNavOpen(!isNavOpen)

  useEffect(() => {
    const dataTheme = isDarkMode ? 'darkMode' : 'lightMode'
    document.documentElement.setAttribute('data-theme', dataTheme)
    console.log('dataTheme:', dataTheme)
  }, [isDarkMode])

  return (
    <>
      <S.Header>
        <div className="logo">
          <Link to="/" aria-label="Back to index page">
            <Symbol />
            <span>tetra</span>
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

      {/* <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal> */}
    </>
  )
}

export default Header
