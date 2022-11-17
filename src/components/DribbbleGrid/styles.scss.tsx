import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

export const DribbbleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: var(--space-xxxs);

  width: 100%;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gutter);
  }

  @media ${breakpoint.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  .gatsby-image-wrapper {
    border-radius: var(--radius);

    img {
      border-radius: var(--radius);
    }
  }
`

export default DribbbleGrid
