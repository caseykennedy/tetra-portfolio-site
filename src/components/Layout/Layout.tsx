// Layout:
// ___________________________________________________________________

import React from 'react'

// Components
import Header from '../Header'
import Footer from '../Footer'

// Styles + Theme
import * as S from './styles.scss'
import 'react-responsive-modal/styles.css'

// ___________________________________________________________________

export type LayoutProps = {
  children: React.ReactNode
  location: {
    pathname: string
  }
}

const Layout = ({ children, location }: LayoutProps) => {
  console.log(
    `%c namelayer | decentralize the internet | built by tetra/ `,
    `background: #78FFF2; color: #000000`
  )
  return (
    <S.Wrapper className="noise">
      <Header />
      <S.Content>{children}</S.Content>
      <Footer location={location} />
    </S.Wrapper>
  )
}

export default Layout
