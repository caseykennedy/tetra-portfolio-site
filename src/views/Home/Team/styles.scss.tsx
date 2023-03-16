import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Team = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--gutter);

  .heading {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: var(--space-xxxxl);
    position: relative;

    p {
      color: var(--color-text-bright);
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
      background: var(--color-bg);
      border-radius: var(--radius);
      border-top: var(--border);
      border-bottom: var(--border);
      padding: var(--gutter);

      @media ${breakpoint.tablet} {
        &:first-child {
          padding-bottom: var(--gutter);
        }
      }

      &__meta {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: var(--gutter);

        margin-bottom: var(--gutter);

        &__avatar {
          border: var(--border);
          border-radius: var(--radius-full);
          height: 75px;
          width: 75px;

          .gatsby-image-wrapper {
            clip-path: circle(50% at 50% 50%);
          }
        }

        &__detail {
          flex: 1;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;

          &__name {
            display: flex;
            flex-flow: column nowrap;

            color: var(--color-text-bright);
            font-size: var(--text-md);
            font-weight: 700;
            text-transform: capitalize;

            span {
              color: var(--color-text-muted);
              font-size: var(--text-base-size);
              font-weight: 600;
            }
          }

          &__xp {
            background: var(--color-text);
            border: var(--border);
            border-radius: var(--radius-lg);
            color: var(--color-bg);
            padding: var(--space-xxs) var(--space-sm);
          }
        }

        &__meta {
          display: flex;
          flex-flow: row nowrap;
          gap: var(--gutter);
          color: var(--color-text-muted);

          & > * {
            flex: 1;
          }

          &__experience {
            padding: var(--gutter);
            border: var(--border);
          }
        }
      }
    }
  }
`

export default Team
