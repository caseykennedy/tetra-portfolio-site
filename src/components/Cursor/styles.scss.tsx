import styled from 'styled-components'

export const Cursor = styled.span`
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 99999;

  position: fixed;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  /* background-color: white; */
  border-radius: 50%;

  transform: translate3d(var(--mouse-x), var(--mouse-y), 0);
  transition: transform 160ms ease-out;

  &::after {
    content: '';
    background-color: white;
    border-radius: 50%;
    border: 2px solid white;

    position: absolute;
    left: 50%;
    top: 50%;

    width: 16px;
    height: 16px;
    padding: var(--space-md);

    transform: translate3d(-50%, -50%, 0);
    transition: width 0.222s ease, height 0.222s ease;
  }

  &.state--hover {
    &::after {
      width: 100px;
      height: 100px;
    }
  }
`

export default Cursor
