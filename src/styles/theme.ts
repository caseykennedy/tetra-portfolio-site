// Theme
// ___________________________________________________________________

import { css } from 'styled-components'
import breakpoint from '../utils/breakpoint'

// ___________________________________________________________________

const Theme = css`
  :root {
    // Border
    --border: 1px solid var(--color-border);

    // Icons
    --icon-size: 1rem;

    // Radius
    --radius: 0.5rem; // border radius base size
    --radius-xs: calc(var(--radius) / 3);
    --radius-sm: calc(var(--radius) / 2);
    --radius-md: calc(var(--radius) * 2);
    --radius-lg: calc(var(--radius) * 4);
    --radius-full: 50%;

    @media ${breakpoint.tablet} {
      --radius: 0.75rem; // border radius base size
    }

    // transitions
    --transition: 0.175s ease-in-out 0s;
    --transition-all: all var(--transition);

    // box shadow
    --shadow-xs: 0 0.5px 1px rgba(0, 0, 0, 0.06),
      1px 1px 2px rgba(0, 0, 0, 0.12);
    --shadow-sm: 0 0.3px 0.4px rgba(0, 0, 0, 0.025),
      1px 0.9px 1.25px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 0.9px 1.5px rgba(0, 0, 0, 0.03),
      0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12);
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
    height: var(--icon-size);
    width: var(--icon-size);
  }
`

export default Theme
