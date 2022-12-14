import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Hero = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 75vh;
  position: relative;
  z-index: 1;

  @media ${breakpoint.tablet} {
    flex-flow: row nowrap;
    justify-content: stretch;
    min-height: 80vh;
  }

  .billboard {
    flex: 1.75;
    display: flex;
    flex-flow: column nowrap;
    position: relative;

    & > * {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      padding: var(--gutter);
      /* padding-top: 0; */

      position: sticky;
      top: 0;
      max-inline-size: 52ch;

      /* &:first-child {
        border-bottom: var(--border);
      } */
    }
  }

  .meta {
    flex: 1;
    display: flex;
    gap: var(--gutter);
    padding: var(--gutter);
    position: relative;

    & > * {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-end;
      justify-content: flex-end;
      text-align: right;

      @media ${breakpoint.tablet} {
        justify-content: flex-start;
      }
    }

    span {
      color: var(--color-text-muted);
    }
  }
`

export const Tetra = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
`
