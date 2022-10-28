// Hero:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'

// Components
import Icon from '../../../components/Icons'
import TetraGeo from '../../../components/TetraGeo'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Hero = () => {
  const nevadaTime = useDate()
  return (
    <>
      <S.Hero>
        <div className="billboard">
          <div>
            <h1>
              Helping brands develop
              <br />
              cutting-edge digital experiences.
            </h1>
          </div>
        </div>
        <div className="meta">
          <div>
            west coast based
            <br />
            {nevadaTime}
          </div>
          <div>
            <div>
              find us on
              <br />
              <a href="/" target="_blank" rel="noopener">
                GitHub
              </a>{' '}
              /{' '}
              <a href="/" target="_blank" rel="noopener">
                Dribbble
              </a>{' '}
              /{' '}
              <a href="/" target="_blank" rel="noopener">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </S.Hero>
      <S.Tetra>
        <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
          <TetraGeo
            flatShading={false}
            position={[0, 1, 0]}
            radius={1}
            speed={0.01}
            wireframe={false}
          />
          <TetraGeo
            flatShading={false}
            position={[0, 1, 0]}
            radius={4}
            detail={0}
            speed={0.003}
            wireframe={true}
          />
        </Canvas>
      </S.Tetra>
    </>
  )
}

export default Hero
