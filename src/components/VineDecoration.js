import React, { useEffect, useRef, useState } from 'react';

const VineDecoration = ({ 
  position = 'top', 
  length = 1200, 
  leafCount = 12, 
  className = '',
  animateOnScroll = true 
}) => {
  const vineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!animateOnScroll) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentVineRef = vineRef.current;
    if (currentVineRef) {
      observer.observe(currentVineRef);
    }

    return () => {
      if (currentVineRef) {
        observer.unobserve(currentVineRef);
      }
    };
  }, [animateOnScroll]);

  const generateVinePath = (width, height) => {
    const segments = 8;
    const segmentWidth = width / segments;
    let path = `M0,${height / 2}`;
    
    for (let i = 1; i <= segments; i++) {
      const x = i * segmentWidth;
      const y = height / 2 + Math.sin(i * 0.8) * (height * 0.3);
      const controlX = (i - 0.5) * segmentWidth;
      const controlY = height / 2 + Math.sin((i - 0.5) * 0.8) * (height * 0.2);
      
      if (i === 1) {
        path += ` Q${controlX},${controlY} ${x},${y}`;
      } else {
        path += ` T${x},${y}`;
      }
    }
    
    return path;
  };

  const generateLeaves = (width, height, count) => {
    const leaves = [];
    const segmentWidth = width / count;
    
    for (let i = 0; i < count; i++) {
      const x = (i + 0.5) * segmentWidth;
      const y = height / 2 + Math.sin((i + 0.5) * 0.8) * (height * 0.3);
      const rotation = Math.sin(i * 0.5) * 30;
      const delay = (i * 0.2).toFixed(1);
      
      // Different leaf shapes for variety
      const leafTypes = [
        // Simple leaf
        `M${x-8},${y} Q${x-4},${y-12} ${x},${y-8} Q${x+4},${y-12} ${x+8},${y} Q${x},${y+4} ${x-8},${y}`,
        // Rounded leaf
        `M${x-6},${y} Q${x-3},${y-10} ${x},${y-6} Q${x+3},${y-10} ${x+6},${y} Q${x+3},${y+6} ${x},${y+3} Q${x-3},${y+6} ${x-6},${y}`,
        // Pointed leaf
        `M${x-5},${y} L${x-2},${y-8} L${x},${y-12} L${x+2},${y-8} L${x+5},${y} L${x+2},${y+4} L${x},${y+2} L${x-2},${y+4} Z`
      ];
      
      const leafPath = leafTypes[i % leafTypes.length];
      const leafColor = i % 2 === 0 ? '#96c26b' : '#a7d184';
      
      leaves.push(
        <g key={i}>
          <path
            d={leafPath}
            fill={leafColor}
            className={`vine-leaf ${isVisible || !animateOnScroll ? 'in-view' : ''}`}
            style={{
              '--delay': `${delay}s`,
              transformOrigin: `${x}px ${y}px`,
              transform: `rotate(${rotation}deg)`,
              animationDelay: isVisible || !animateOnScroll ? `${delay}s` : 'none'
            }}
          />
          {/* Add small stems */}
          <line
            x1={x}
            y1={y}
            x2={x}
            y2={y + 3}
            stroke="#8ab85f"
            strokeWidth="1"
            className={`vine-leaf ${isVisible || !animateOnScroll ? 'in-view' : ''}`}
            style={{
              '--delay': `${delay}s`,
              animationDelay: isVisible || !animateOnScroll ? `${delay}s` : 'none'
            }}
          />
        </g>
      );
    }
    
    return leaves;
  };

  return (
    <div 
      ref={vineRef}
      className={`vine-decoration ${position} ${className}`}
    >
      <svg 
        className="vine-svg"
        viewBox={`0 0 ${length} 40`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main vine path */}
        <path
          d={generateVinePath(length, 40)}
          stroke="#d4e0c4"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className={`vine-path ${isVisible || !animateOnScroll ? 'in-view' : ''}`}
        />
        
        {/* Leaves */}
        {generateLeaves(length, 40, leafCount)}
        
        {/* Small flowers occasionally */}
        {Array.from({ length: Math.floor(leafCount / 4) }, (_, i) => {
          const x = (i * 4 + 2) * (length / leafCount);
          const y = 20 + Math.sin((i * 4 + 2) * 0.8) * 12;
          const delay = ((i * 4 + 2) * 0.2 + 1).toFixed(1);
          
          return (
            <circle
              key={`flower-${i}`}
              cx={x}
              cy={y}
              r="2"
              fill="#f4d03f"
              className={`vine-leaf ${isVisible || !animateOnScroll ? 'in-view' : ''}`}
              style={{
                '--delay': `${delay}s`,
                animationDelay: isVisible || !animateOnScroll ? `${delay}s` : 'none'
              }}
            />
          );
        })}
        
        {/* Additional decorative elements */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default VineDecoration;