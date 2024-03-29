import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Approach = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--gutter);

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
    justify-content: stretch;
  }

  .heading {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: var(--space-xxxxl);
    position: relative;

    p {
      color: var(--color-text-bright);
      max-width: 22ch;
      position: sticky;
      top: var(--gutter);

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

export default Approach
