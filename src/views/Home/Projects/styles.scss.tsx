// Projects styles:

import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Projects = styled.div`
  display: flex;
  /* margin-bottom: var(--gutter); */

  .project-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    gap: var(--space-xxxs);

    width: 100%;

    @media ${breakpoint.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .project {
    overflow: hidden;
    position: relative;

    &__item {
    }

    &__meta {
      display: flex;
      flex-flow: column nowrap;

      /* backdrop-filter: blur(7px); */
      background-color: var(--color-black);
      border: var(--border);
      border-color: hsl(245, 8%, 18%);
      /* border-radius: var(--radius-sm); */
      padding: var(--gutter);

      position: absolute;
      top: var(--gutter);
      left: var(--gutter);
      /* height: 100%; */
      /* width: 100%; */
      max-width: calc(100% - calc(var(--gutter) * 2));

      .title {
        font-size: var(--text-md);
        margin-bottom: var(--space-xxxs);
      }

      ul {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: var(--space-xxxxs);

        li {
          display: flex;
          place-items: center;

          /* border: var(--border); */
          border-radius: var(--radius);
          font-size: var(--text-base-size);
          white-space: nowrap;
          transition: color var(--transition);

          /* opacity: 0; */

          /* &:hover {
            color: var(--color-white);
          } */
        }
      }
    }

    &:hover {
      .title {
        span {
          color: var(--color-white);
        }
      }

      ul li {
        opacity: 1;
      }
    }
  }
`

export default Projects
