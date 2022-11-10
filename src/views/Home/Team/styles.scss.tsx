import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Team = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--gutter);

  .title {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    position: relative;

    p {
      max-width: 26ch;

      span {
        color: var(--color-text-muted);
        display: block;
      }
    }
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    gap: var(--gutter);
    margin-top: var(--space-xxxxl);
    width: 100%;

    @media ${breakpoint.tablet} {
      grid-template-columns: repeat(4, 1fr);
    }

    .partner {
      .name {
        font-size: var(--text-base-size);
        font-weight: 700;
        text-transform: capitalize;
      }

      .title {
        color: var(--color-text-muted);
        border-bottom: var(--border);
        padding-bottom: var(--gutter);
      }
    }
  }
`

export default Team
