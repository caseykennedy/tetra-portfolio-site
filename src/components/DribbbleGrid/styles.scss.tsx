import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

export const DribbbleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: var(--gutter);

  width: 100%;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${breakpoint.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  img {
    border-radius: var(--radius);
  }
`

export default DribbbleGrid
