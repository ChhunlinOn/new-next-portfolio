"use client";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // Cover entire screen
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          shape: { type: "square" },
          opacity: { value: 0.6 },
          size: { value: 3 },
          move: { enable: true, speed: 0.8 },
          links: {
            enable: true,
            distance: 200,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
          color: { value: "#ffffff" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: false },
          },
        },
        background: { color: "transparent" }, // Keep it transparent
      }}
    />
  );
};

export default ParticlesBackground;
