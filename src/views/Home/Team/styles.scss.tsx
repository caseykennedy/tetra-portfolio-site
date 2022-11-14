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
    margin-bottom: var(--space-xxxxl);
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
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    gap: var(--space-xxl);
    width: 100%;

    @media ${breakpoint.tablet} {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--gutter);
    }

    @media ${breakpoint.desktop} {
      grid-template-columns: repeat(3, 1fr);
    }

    .partner {
      @media ${breakpoint.tablet} {
        &:first-child {
          padding-bottom: var(--space-xxl);
        }
      }

      .name {
        font-size: var(--text-base-size);
        font-weight: 700;
        text-transform: capitalize;
      }

      .position {
        border-bottom: var(--border);
        color: var(--color-text-muted);
        display: block;
        padding-bottom: var(--gutter);
      }
    }
  }
`

export default Team
