/* eslint-disable react/no-unknown-property */
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

const mailTo = 'mailto:taylor@tetrashapes.com'

const Hero = () => {
  const nevadaTime = useDate()
  return (
    <>
      <S.Hero>
        <div className="billboard">
          <div>
            <h1>
              {/* Helping brands develop
              <br />
              cutting-edge digital experiences. */}
              Tetra is a design and development studio for crypto startups and
              upstarts.
              <br />
              <br />
              We believe the next generation of the internet (web3) will be
              owned by the people therefore aim to build products which support
              decentralization.
              <br />
              <br />
              We develop brands and software that captivate and combine form
              with function for a fluid experience.
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
              contact
              <br />
              <a href={mailTo} target="_blank" rel="noreferrer">
                info@tetrashapes.com
              </a>
            </div>
          </div>
        </div>
      </S.Hero>
      <S.Tetra>
        <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
          {/* <ambientLight intensity={0.5} /> */}
          <ambientLight intensity={1} />
          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            angle={0.25}
            color="cyan"
            // castShadow
            // shadow-mapSize={[512, 512]}
          />
          <directionalLight position={[0, 5, -4]} intensity={4} />
          <directionalLight position={[0, -15, -0]} intensity={2} color="red" />

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
            detail={1}
            speed={0.0009}
            wireframe={true}
          />
        </Canvas>
      </S.Tetra>
    </>
  )
}

export default Hero
