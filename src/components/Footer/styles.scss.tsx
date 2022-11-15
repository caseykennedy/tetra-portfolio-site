// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  border-top: var(--border);
  min-height: 55vh;

  position: relative;
  z-index: 1;

  @media ${breakpoint.tablet} {
    min-height: 44vh;
  }

  .contact {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    padding: var(--gutter);
    padding-bottom: var(--space-xxxxl);

    @media ${breakpoint.tablet} {
      flex-flow: row nowrap;
    }

    & > * {
      flex: 1;
    }

    &__cta {
      flex: 2;

      h2 {
        margin-bottom: var(--space-lg);
      }
    }

    &__details {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;
      text-align: right;

      @media ${breakpoint.tablet} {
        justify-content: flex-start;
      }

      div {
        &:first-child {
          margin-bottom: var(--gutter);
        }
      }

      span {
        color: var(--color-text-muted);
      }
    }

    .btn {
      svg {
        transform: rotate(-90deg);
        /* width: 18px; */
      }
    }
  }

  .info {
    display: flex;
    align-items: flex-end;
    border-top: var(--border);
    padding: var(--gutter);
    padding-bottom: var(--space-xl);

    @media ${breakpoint.tablet} {
      padding-bottom: var(--space-xxl);
    }

    &__legal {
      flex: 2;
    }

    &__links {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;
      gap: var(--space-sm);
      text-align: right;

      @media ${breakpoint.tablet} {
        flex-flow: row nowrap;
      }

      a {
        cursor: ne-resize;
      }
    }
  }
`

export default Footer
