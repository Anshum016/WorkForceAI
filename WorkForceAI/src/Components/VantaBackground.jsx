import React, { useEffect, useRef, useState } from 'react';

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.THREE) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 500.0,
          minWidth: 500.0,
          scale: 1.0,
          scaleMobile: 1.0,
          pointSize: 9.0,
          color: 0xfc0848,
          backgroundColor: 0x0c0c14,
          points: 12.0,
          maxDistance: 19.0,
          spacing: 12.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Vanta Background Canvas */}
      <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10" />

      {/* Main App Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VantaBackground;
