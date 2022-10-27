// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import breakpoint from '../../utils/breakpoint'

// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  height: 100%;
  width: 100%;

  /* background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(255, 255, 255, 0.07) 25%,
      rgba(255, 255, 255, 0.07) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.07) 75%,
      rgba(255, 255, 255, 0.07) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(255, 255, 255, 0.07) 25%,
      rgba(255, 255, 255, 0.07) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.07) 75%,
      rgba(255, 255, 255, 0.07) 76%,
      transparent 77%,
      transparent
    );
  height: 100%;
  background-size: var(--space-xxxxl) var(--space-xxxxl); */

  /* @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
  } */
`

export const Content = styled.div`
  flex: 1;
  display: flex;

  /* display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: var(--gutter);
  gap: var(--gutter); */

  width: 100%;
`
