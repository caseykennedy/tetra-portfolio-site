import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ fill?: string }>`
  .cls-1 {
    fill: none;
  }

  .cls-2 {
    fill: var(--color-cls-2);
  }

  .cls-3,
  .cls-4 {
    opacity: 0.7;
  }

  .cls-5 {
    isolation: isolate;
  }

  .cls-4 {
    fill: var(--color-cls-4);
  }
`

type Props = { fill?: string }

const Symbol = ({ fill }: Props) => (
  <SVG
    width="32"
    viewBox="0 0 66.77 58.44"
    initial="hidden"
    animate="visible"
    fill="none"
  >
    <g id="LAYERS">
      <g>
        <g id="Layer_1-2" data-name="Layer 1-2">
          <polygon
            className="cls-4"
            points="34.31 0 0 48.76 66.77 48.76 34.31 0"
          />
          <line className="cls-2" x1="44.61" y1="58.44" y2="48.76" />
          <g id="Layer_1-2-2" data-name="Layer 1-2" className="cls-3">
            <polyline
              className="cls-2"
              points="44.61 58.44 0 48.76 34.31 0 44.61 58.44"
            />
          </g>
          <polyline
            className="cls-4"
            points="34.31 0 44.61 58.44 66.77 48.76"
          />
        </g>
        <g id="Layer_1-2-3" data-name="Layer 1-2">
          <polygon
            className="cls-1"
            points="34.31 0 0 48.76 66.77 48.76 34.31 0"
          />
          <line className="cls-1" y1="48.76" x2="44.61" y2="58.44" />
          <polygon
            className="cls-1"
            points="34.31 0 44.61 58.44 66.77 48.76 34.31 0"
          />
        </g>
      </g>
    </g>
  </SVG>
)

export default Symbol

const defaultProps = {
  fill: 'var(--color-text)',
}

Symbol.defaultProps = defaultProps
