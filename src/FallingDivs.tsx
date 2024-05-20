import React, { useEffect, useRef } from 'react';

interface FallingDivsProps {
  divs: React.ReactNode[];
  duration?: number;
  delay?: number;
}

const FallingDivs: React.FC<FallingDivsProps> = ({ divs, duration = 1000, delay = 100 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const height = container.clientHeight;
      divs.forEach((div, index) => {
        const element = container.children[index] as HTMLElement;
        element.style.opacity = '0';
        element.style.transform = `translateY(-${height}px)`;
        setTimeout(() => {
          element.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, delay * index);
      });
    }
  }, [divs, duration, delay]);

  return (
    <div ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>
      {divs.map((div, index) => (
        <div key={index} style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
          {div}
        </div>
      ))}
    </div>
  );
};

export default FallingDivs;