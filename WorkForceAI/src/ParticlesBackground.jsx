// src/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: { enable: true, color: "#ffffff" },
        },
        background: {
          color: "#0d47a1",
        },
      }}
    />
  );
};

export default ParticlesBackground;
