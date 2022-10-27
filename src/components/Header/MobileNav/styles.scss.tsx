// Mobile Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import breakpoint from '../../../utils/breakpoint'

// Begin Styles
// ___________________________________________________________________

export const MobileNav = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 0;
  padding: var(--space-xxxxl);
  height: 100vh;
  width: 100vw;

  .content {
    display: flex;
    flex-flow: column nowrap;
    background: var(--color-bg);
    /* border: var(--border); */
    margin: 0;
    padding: var(--space-xxl);
    width: 100%;

    div {
      flex: 1;
      display: flex;
      font-size: var(--text-lg);
    }
  }
`

export const NavLink = styled(motion.li)`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;

  @media ${breakpoint.tablet} {
    padding: 0;
  }

  a {
    color: var(--color-text);
    font-size: var(--text-lg);
    text-decoration: none;
    width: 100%;

    &:hover {
      color: inherit;
      text-decoration: underline;
    }
  }
`
