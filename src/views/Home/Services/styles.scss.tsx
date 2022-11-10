import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Services = styled(motion.div)`
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

  .service-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    gap: var(--gutter);

    margin-top: var(--space-xxxxl);
    width: 100%;

    @media ${breakpoint.tablet} {
      grid-template-columns: repeat(4, 1fr);
    }

    .service {
      &__figure {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        margin-bottom: var(--gutter);
        padding: var(--gutter);
        height: 150px;

        background: var(--color-bg);
        border: var(--border);
        border-radius: var(--radius);

        .integer {
          display: flex;
          align-items: center;
          justify-content: center;

          padding: var(--space-xxxs);
          height: 11px;
          width: 11px;

          border: var(--border);
          border-radius: var(--radius-full);

          font-size: var(--text-sm);
          font-weight: 700;
        }

        .name {
          font-size: var(--text-md);
          font-weight: 700;
        }
      }
    }
  }
`

export default Services
