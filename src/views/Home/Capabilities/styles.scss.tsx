import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Capabilities = styled(motion.div)`
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

  .service-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    gap: var(--space-lg);
    width: 100%;

    @media ${breakpoint.tablet} {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--gutter);
    }

    @media ${breakpoint.desktop} {
      grid-template-columns: repeat(4, 1fr);
    }

    .service {
      &__figure {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        margin-bottom: var(--gutter);
        padding: var(--gutter);
        height: 75px;

        background: var(--color-bg);
        border-top: var(--border);
        border-bottom: var(--border);
        border-radius: var(--radius);

        @media ${breakpoint.tablet} {
          height: 150px;
        }
      }

      &__id {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: var(--space-xxxs);
        height: 11px;
        width: 11px;

        background: var(--color-text);
        color: var(--color-bg);
        border-radius: var(--radius-full);

        font-size: var(--text-sm);
        font-weight: 700;
      }

      &__name {
        color: var(--color-text-bright);
        font-size: var(--text-md);
        font-weight: 700;
      }

      ul {
        list-style: circle inside;

        li {
          margin-bottom: var(--space-xxxs);
          transition: color var(--transition);
        }
      }

      &:hover {
        ul li {
          color: var(--color-text);
        }
      }
    }
  }
`

export default Capabilities
