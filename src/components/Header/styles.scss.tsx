// Header Styles:

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const Header = styled.header`
  backdrop-filter: blur(7px);
  /* background-color: var(--color-bg); */
  background-color: var(--color-bg-blur);
  border-bottom: var(--border);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  /* position: sticky;
  top: 0; */

  padding: var(--gutter);
  /* padding-bottom: var(--space-xxxl); */
  height: var(--header-height);
  width: 100%;
  z-index: 9;

  /* @media ${breakpoint.tablet} {
    flex-flow: column nowrap;
    height: 100vh;
    width: var(--header-width);
  } */

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${breakpoint.tablet} {
      flex-flow: column nowrap;
    }

    a {
      color: var(--color-text);

      &:hover {
        color: var(--color-text-muted);
      }
    }

    .symbol {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .utils {
    display: flex;
    align-items: center;
    gap: var(--space-xxxs);

    button {
      display: flex;
      place-content: center;
      padding: 0;
      background-color: transparent;
      border: none;
      color: var(--color-text);
      cursor: pointer;
      transition: color var(--transition);

      &:hover {
        color: var(--color-text-muted);
      }

      &.info-toggle {
        display: flex;
        place-content: center;
        padding: var(--space-xxxxs) var(--space-xs);
        border: var(--border);
        border-color: var(--color-text);
        border-radius: var(--radius);
        /* font-size: var(--text-sm); */

        &:hover {
          background: var(--color-text);
          color: var(--color-bg);
        }
      }

      &.theme-toggle {
        font-size: 2rem;
        transform: rotate(180deg);
        transition: 0.333s ease-in-out 0s;

        &__active {
          transform: rotate(0deg);
        }
      }
    }
  }
`

export default Header
