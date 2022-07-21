import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Particle() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          number: {
            value: 20,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: '#fafa',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.8,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              size_min: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
      }}
    />
  );
}

export default Particle;
