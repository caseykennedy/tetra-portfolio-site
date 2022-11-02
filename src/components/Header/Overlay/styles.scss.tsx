// Mobile Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import breakpoint from '../../../utils/breakpoint'

// Begin Styles
// ___________________________________________________________________

export const Overlay = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 0;
  padding: var(--space-xxxxl);
  height: 100vh;
  width: 100vw;

  .exit {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    background-color: transparent;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    transition: color var(--transition);

    &:hover {
      color: var(--color-text-muted);
    }
  }

  .content {
    display: flex;
    flex-flow: column nowrap;
    backdrop-filter: blur(5px);
    background: var(--color-bg);
    /* border: var(--border); */
    border-radius: var(--radius-sm);
    opacity: 0.925;
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

export default Overlay
