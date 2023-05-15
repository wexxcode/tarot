import React, { useState, useEffect } from 'react';

const Loading: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`loading-container ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="loading"></div>
    </div>
  );
};

export default Loading;
