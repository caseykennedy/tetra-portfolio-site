import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Intro = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--gutter);

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
    justify-content: stretch;
  }

  .title {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: var(--space-xxxxl);
    position: relative;

    p {
      max-width: 20ch;
      position: sticky;
      top: calc(var(--header-height) + var(--gutter));

      span {
        color: var(--color-text-muted);
        display: block;
      }
    }
  }

  .message {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
  }
`

export default Intro
