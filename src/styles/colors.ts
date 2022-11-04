// Colors
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

const Colors = css`
  :root,
  [data-theme='default'] {
    // base
    --color-black: hsl(0, 0%, 0%);
    --color-white: hsl(0, 0%, 100%);

    // background
    --color-bg: hsl(249, 11%, 9%);
    --color-bg-blur: hsla(249, 11%, 9%, 0.94);
    // typography
    --color-text: hsl(245, 8%, 78%);
    --color-text-muted: hsl(245, 8%, 58%);
    --color-text-bright: hsl(245, 8%, 92%);
    // border
    --color-border: hsl(245, 8%, 18%);
  }

  [data-theme='lightMode'] {
    --color-black: hsl(0, 0%, 100%);
    --color-white: hsl(0, 0%, 0%);

    // background
    --color-bg: hsl(245, 8%, 92%);
    --color-bg-blur: hsla(245, 8%, 92%, 0.875);
    // typography
    --color-text: hsl(270, 5%, 20%);
    --color-text-muted: hsl(245, 8%, 38%);
    --color-text-bright: hsl(249, 11%, 6%);
    // border
    --color-border: hsl(245, 8%, 80%);
  }
`

export default Colors
