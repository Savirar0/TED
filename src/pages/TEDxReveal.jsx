import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { X } from 'lucide-react';

const TEDxReveal = () => {
  const [countdown, setCountdown] = useState(3);
  const [showQR, setShowQR] = useState(false);
  const [particlesVisible, setParticlesVisible] = useState(false);
  const [particlesExploded, setParticlesExploded] = useState(false);
  const [showTexts, setShowTexts] = useState(false);

  
  const curlyLines = Array(3).fill().map((_, i) => {
    const baseDelay = 200 * i;
    const blinkSpeed = 1000 + (i * 300);
    
    return {
      id: i,
      path: `M ${10 + i * 5},${20 + i * 10} Q ${30 + i * 5},${5 + i * 3} ${50 + i * 2},${25 + i * 8} T ${90 - i * 3},${30 + i * 5}`,
      color: i % 3 === 0 ? '#FF2B06' : (i % 3 === 1 ? '#FFFFFF' : '#FF2B06'),
      delay: baseDelay,
      blinkDelay: blinkSpeed,
      position: {
        x: Math.sin(i) * 10,
        y: Math.cos(i) * 10
      }
    };
  });

  
  const curlyLineProps = curlyLines.map(line => {
    const moveProps = useSpring({
      from: { x: 0, y: 0, opacity: 0.3 },
      to: async (next) => {
        
        while(true) {
          await next({ 
            x: line.position.x, 
            y: line.position.y, 
            opacity: 1 
          });
          await next({ 
            x: -line.position.x, 
            y: -line.position.y, 
            opacity: 0.7 
          });
          await next({ 
            x: line.position.y, 
            y: -line.position.x, 
            opacity: 1 
          });
          await next({ 
            x: -line.position.y, 
            y: line.position.x, 
            opacity: 0.7 
          });
        }
      },
      delay: line.delay,
      config: { tension: 100, friction: 10 }
    });

    
    const blinkProps = useSpring({
      from: { strokeWidth: 0.5, stroke: line.color },
      to: async (next) => {
        while(true) {
          await next({ 
            strokeWidth: 1.5, 
            stroke: '#FFFFFF' 
          });
          await next({ 
            strokeWidth: 0.5, 
            stroke: line.color 
          });
          await next({ 
            strokeWidth: 2, 
            stroke: '#FF2B06' 
          });
          await next({ 
            strokeWidth: 0.5, 
            stroke: line.color 
          });
        }
      },
      delay: line.blinkDelay,
      config: { duration: 500 }
    });

    
    const dashProps = useSpring({
      from: { strokeDashoffset: 1000 },
      to: { strokeDashoffset: 0 },
      delay: line.delay,
      config: { tension: 120, friction: 14 }
    });

    return { moveProps, blinkProps, dashProps };
  });

  
  const logoProps = useSpring({
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
    config: config.wobbly
  });

  
  const countdownProps = useSpring({
    opacity: countdown > 0 ? 1 : 0,
    scale: countdown > 0 ? 1 : 0.5,
    color: countdown === 1 ? '#FF2B06' : (countdown === 2 ? '#FFFFFF' : '#FF2B06'),
    config: config.gentle
  });

  
  const qrProps = useSpring({
    opacity: showQR ? 1 : 0,
    scale: showQR ? 1 : 0.8,
    config: config.wobbly
  });

  
  const particles = Array(120).fill().map((_, i) => {
    
    const angle = (i / 120) * Math.PI * 2;
    const distance = 50 + Math.random() * 250; 
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const scale = 0.3 + Math.random() * 0.7;
    const opacity = 0.4 + Math.random() * 0.6;
    
    return {
      id: i,
      x,
      y,
      scale,
      opacity,
      angle: Math.random() * 360,
      color: i % 5 === 0 ? '#FF2B06' : (i % 5 === 1 ? '#FFFFFF' : (i % 5 === 2 ? '#000000' : (i % 5 === 3 ? '#FF2B06' : '#FFFFFF')))
    };
  });

  
  const particleProps = useSpring({
    opacity: particlesVisible ? 1 : 0,
    config: { duration: 300 }
  });

  
  const inspirationalTexts = [
    { text: "Ideas Worth Spreading", delay: 100, position: { top: '15%', left: '60%' } },
    { text: "Innovation", delay: 300, position: { top: '75%', left: '25%' } },
    { text: "Creativity", delay: 500, position: { top: '35%', left: '15%' } },
    { text: "Inspire", delay: 700, position: { top: '65%', left: '70%' } },
    { text: "Transform", delay: 900, position: { top: '20%', left: '30%' } },
    { text: "Discover", delay: 1100, position: { top: '80%', left: '60%' } }
  ];

  
  const textAnimations = inspirationalTexts.map(item => 
    useSpring({
      from: { opacity: 0, transform: 'scale(0.8) rotate(-10deg)' },
      to: { opacity: showTexts ? 1 : 0, transform: showTexts ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)' },
      delay: item.delay,
      config: { tension: 200, friction: 20 }
    })
  );

  
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      
      setParticlesVisible(true);
      
      
      setTimeout(() => {
        setShowTexts(true);
      }, 200);
      
      
      setTimeout(() => {
        setParticlesExploded(true);
        
        
        setTimeout(() => {
          setShowQR(true);
        }, 800);
      }, 500);
    }
  }, [countdown]);

  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        {Array(20).fill().map((_, i) => (
          <div 
            key={`bg-elem-${i}`}
            className="absolute rounded-full"
            style={{
              width: 5 + Math.random() * 10,
              height: 5 + Math.random() * 10,
              backgroundColor: i % 3 === 0 ? '#FF2B06' : '#FFFFFF',
              opacity: 0.1 + Math.random() * 0.3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 4}s infinite alternate, 
                         move ${10 + Math.random() * 20}s infinite alternate`
            }}
          />
        ))}
      </div>
      
      
      <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {curlyLines.map((line, index) => (
          <animated.path
            key={line.id}
            d={line.path}
            stroke={curlyLineProps[index].blinkProps.stroke}
            strokeWidth={curlyLineProps[index].blinkProps.strokeWidth}
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset={curlyLineProps[index].dashProps.strokeDashoffset}
            style={{
              transform: `translate(${curlyLineProps[index].moveProps.x}px, ${curlyLineProps[index].moveProps.y}px)`,
              opacity: curlyLineProps[index].moveProps.opacity
            }}
          />
        ))}
      </svg>
      
      
      {inspirationalTexts.map((item, index) => (
        <animated.div
          key={`text-${index}`}
          className="absolute font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600"
          style={{
            ...item.position,
            fontSize: 16 + Math.random() * 24,
            ...textAnimations[index]
          }}
        >
          {item.text}
        </animated.div>
      ))}
      
      
      <animated.div className="mb-8 z-10" style={logoProps}>
        <div className="flex items-center">
          <div className="text-5xl font-bold text-white">TED<X className="inline text-red-600 w-10 h-10" /></div>
          <div className="text-3xl ml-2 text-white">Sreyas Institute</div>
        </div>
      </animated.div>
      
      
      {countdown > 0 && (
        <animated.div 
          className="text-9xl font-bold z-10"
          style={{
            ...countdownProps,
            textShadow: '0 0 15px rgba(255,255,255,0.8)'
          }}
        >
          {countdown}
        </animated.div>
      )}
      
      
      <animated.div 
        className="absolute"
        style={particleProps}
      >
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute"
            style={{
              width: 3 + Math.random() * 8,
              height: 3 + Math.random() * 8,
              backgroundColor: particle.color,
              borderRadius: Math.random() > 0.7 ? '50%' : '0',
              opacity: particle.opacity,
              transform: `translate(${particlesExploded ? particle.x : 0}px, ${particlesExploded ? particle.y : 0}px) 
                         scale(${particle.scale}) 
                         rotate(${particle.angle}deg)`,
              transition: particlesExploded ? 'transform 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28)' : 'none',
              boxShadow: particle.color === '#FF2B06' ? '0 0 5px #FF2B06' : 'none'
            }}
          />
        ))}
      </animated.div>
      
      
      <animated.div 
        className="mt-8 bg-white p-3 rounded-lg shadow-lg z-10"
        style={{
          ...qrProps,
          boxShadow: '0 0 20px rgba(255,43,6,0.7)'
        }}
      >
        
        <div className="w-48 h-48 bg-white relative overflow-hidden">
          <div className="absolute inset-0 flex flex-wrap">
            {Array(20).fill().map((_, i) => (
              Array(20).fill().map((_, j) => (
                <div 
                  key={`${i}-${j}`}
                  className="w-2.5 h-2.5"
                  style={{
                    backgroundColor: Math.random() > 0.7 ? '#000' : 'transparent'
                  }}
                />
              ))
            ))}
          </div>
          
          <div className="absolute top-0 left-0 w-10 h-10 border-4 border-black bg-white" style={{ borderRight: 0, borderBottom: 0 }}></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-4 border-black bg-white" style={{ borderLeft: 0, borderBottom: 0 }}></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-4 border-black bg-white" style={{ borderRight: 0, borderTop: 0 }}></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-1">
            <div className="text-sm font-bold">
              TED<X className="inline text-red-600 w-3 h-3" />
            </div>
          </div>
        </div>
        <div className="text-black text-center font-bold mt-2 text-lg">Scan to visit website</div>
      </animated.div>
      
      
      {showQR && (
        <div className="mt-6 text-white z-10 animate-pulse">
          <p className="text-center text-xl">TEDx Sreyas Institute Presents</p>
          <p className="text-center text-3xl text-red-600 font-bold mt-2">Illuminate The Path</p>
          <p className="text-center text-lg mt-4">May 31st 2025</p>
        </div>
      )}
      
      
      {particlesExploded && (
        <>
          <div className="absolute top-5 left-5 text-white text-sm animate-bounce">
            <X className="w-6 h-6 text-red-600" />
          </div>
          <div className="absolute bottom-5 right-5 text-white text-sm animate-bounce delay-300">
            <X className="w-6 h-6 text-white" />
          </div>
          <div className="absolute top-5 right-5 text-white text-sm animate-ping">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          </div>
          <div className="absolute bottom-5 left-5 text-white text-sm animate-ping delay-150">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </>
      )}
      
      
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.5); opacity: 0.8; }
        }
        
        @keyframes move {
          0% { transform: translate(0, 0); }
          25% { transform: translate(20px, 30px); }
          50% { transform: translate(-20px, 10px); }
          75% { transform: translate(10px, -20px); }
          100% { transform: translate(-10px, -10px); }
        }
        
        .animate-pulse {
          animation: pulse 2s infinite alternate;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        .delay-150 {
          animation-delay: 150ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default TEDxReveal;