// Theme
// ___________________________________________________________________

import { css } from 'styled-components'
import breakpoint from '../utils/breakpoint'

// ___________________________________________________________________

const Theme = css`
  :root {
    // Border
    --border: 1px solid var(--color-border);

    // Header
    --header-height: 44px;

    // Icons
    --icon-size: 1.25rem;

    // Radius
    --radius: 1rem; // border radius base size
    --radius-xs: calc(var(--radius) / 3);
    --radius-sm: calc(var(--radius) / 2);
    --radius-md: calc(var(--radius) * 2);
    --radius-lg: calc(var(--radius) * 4);
    --radius-full: 50%;

    // transitions
    --transition: 0.175s ease;
    --transition-all: all var(--transition);

    // box shadow
    --shadow-xs: 0 0.5px 1px rgba(0, 0, 0, 0.06),
      1px 1px 2px rgba(0, 0, 0, 0.12);
    --shadow-sm: 0 0.3px 0.4px rgba(0, 0, 0, 0.025),
      1px 0.9px 1.25px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 0.9px 1.5px rgba(0, 0, 0, 0.03),
      0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12);

    @media ${breakpoint.tablet} {
    }
  }

  /* @supports (--css: variables) {
    @media ${breakpoint.tablet} {
      :root,
      * {
      }
    }
  } */

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    // font-family: 'fontName';
    height: var(--icon-xs);
    width: var(--icon-xs);
  }
`

export default Theme
