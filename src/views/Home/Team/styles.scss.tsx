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

      &__info {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: var(--gutter);

        border-bottom: var(--border);
        margin-bottom: var(--gutter);
        padding-bottom: var(--gutter);

        &__avatar {
          border: var(--border);
          border-radius: var(--radius-full);
          height: 75px;
          width: 75px;

          .gatsby-image-wrapper {
            clip-path: circle(50% at 50% 50%);
          }
        }

        &__person {
          flex: 1;
        }

        &__name {
          font-size: var(--text-md);
          font-weight: 700;
          text-transform: capitalize;
        }

        &__position {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;

          color: var(--color-text-muted);
          padding-right: var(--space-xxl);
        }
      }
    }
  }
`

export default Team
