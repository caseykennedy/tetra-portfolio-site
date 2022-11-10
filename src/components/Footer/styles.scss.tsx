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
  min-height: 75vh;
  padding: var(--gutter);

  position: relative;
  z-index: 1;

  .title {
    flex: 1;

    p {
      max-width: 20ch;

      span {
        color: var(--color-text-muted);
        display: block;
      }
    }
  }

  .message {
    div {
      font-size: var(--text-xl);
      margin-bottom: var(--space-xl);

      @media ${breakpoint.tablet} {
        font-size: var(--text-xxxl);
      }
    }
  }
`

export default Footer
