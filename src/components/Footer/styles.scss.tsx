// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--gutter);
  border-top: var(--border);
  min-height: 58vh;

  position: relative;
  z-index: 1;

  .contact {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    padding: var(--gutter);

    @media ${breakpoint.tablet} {
      flex-flow: row nowrap;
    }

    & > * {
      flex: 1;
    }

    &__cta {
      flex: 2;
      font-size: var(--text-xxl);

      @media ${breakpoint.tablet} {
        font-size: var(--text-xxxl);
      }

      div {
        margin-bottom: var(--space-md);
      }
    }

    &__details {
      text-align: right;

      div {
        margin-bottom: var(--gutter);
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
    padding-bottom: var(--space-xxxxl);

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
    }
  }
`

export default Footer
