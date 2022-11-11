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
  min-height: 65vh;
  padding: var(--gutter);

  position: relative;
  z-index: 1;

  & > * {
    flex: 1;
  }

  .contact {
    display: flex;
    flex-flow: column nowrap;

    @media ${breakpoint.tablet} {
      flex-flow: row nowrap;
    }

    & > * {
      flex: 1;
    }

    &__cta {
      flex: 2;
      font-size: var(--text-xl);

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
