/* eslint-disable react/no-unknown-property */
// Hero:
// ___________________________________________________________________

import * as React from 'react'
import { Canvas } from '@react-three/fiber'

// Components
import TetraGeo from '../../../components/TetraGeo'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const mailTo = 'mailto:info@tetrashapes.com'

const HeroCanvas = () => (
  <S.Tetra>
    <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
      <ambientLight intensity={1} />
      <spotLight
        position={[20, 20, 25]}
        penumbra={1}
        angle={0.25}
        color="black"
        // castShadow
        // shadow-mapSize={[512, 512]}
      />
      <directionalLight position={[0, 5, -4]} intensity={20} />
      <directionalLight position={[0, -15, -0]} intensity={19} color="blue" />
      <TetraGeo
        flatShading={false}
        position={[0, 1, 0]}
        radius={1}
        speed={0.0035}
        wireframe={false}
      />
      <TetraGeo
        flatShading={false}
        position={[0, 1, 0]}
        radius={5}
        detail={0}
        speed={0.00079}
        wireframe={true}
      />
    </Canvas>
  </S.Tetra>
)

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
              Tetra is a design and development studio for visionaries.
              {/* <br />
              <br />
              We believe the next generation of the internet (web3) will be
              owned by the people therefore aim to build products which support
              decentralization.
              <br />
              <br />
              We develop brands and software that captivate and combine form
              with function for a fluid experience. */}
            </h1>
          </div>
        </div>
        <div className="meta">
          <div>
            <div>
              west coast based
              <br />
              <span>{nevadaTime}</span>
            </div>
          </div>
          <div>
            <div>
              contact
              <br />
              <a
                href={mailTo}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                info@
              </a>
            </div>
          </div>
        </div>
      </S.Hero>
      <HeroCanvas />
    </>
  )
}

export default Hero
