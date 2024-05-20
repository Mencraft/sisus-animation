import React, { useState } from 'react';

interface ExpandOnClickProps {
  children: React.ReactNode;
  duration?: number;
}

const ExpandOnClick: React.FC<ExpandOnClickProps> = ({ children, duration = 500 }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        transition: `all ${duration}ms`,
        ...(expanded ? {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
        } : {}),
      }}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default ExpandOnClick;