import styled from 'styled-components'
import { breakpoint } from '../../styles/mixins'

// ___________________________________________________________________

export const Marquee = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-bg);
  border-top: var(--border);
  padding: var(--gutter) 0;
  height: var(--header-height);

  .marquee {
    display: flex;
    justify-content: space-between;

    & > * {
      padding: 0 var(--gutter);
    }
  }
`

export default Marquee
