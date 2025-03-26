import React, { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';

const generateStars = () => {
  return Array.from({ length: 200 }, () => ({
    x: Math.random() * 900,
    y: Math.random() * 500,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.7 + 0.3
  }));
};

const MountainSection = () => {
  const mountainLeftRef = useRef(null);
  const mountainMidRef = useRef(null);
  const mountainRightRef = useRef(null);
  const containerRef = useRef(null);
  const pathWordRef = useRef(null);
  const lightPathRef = useRef(null);
  const countdownRef = useRef(null);
  const starsRef = useRef(null);


  const stars = useMemo(() => generateStars(), []);


  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('May 31, 2025 00:00:00').getTime();

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        starsRef.current.children, 
        { 
          opacity: 0,
          scale: 0.5
        },
        { 
          opacity: (i) => stars[i].opacity,
          scale: 1,
          duration: 2,
          stagger: {
            from: 'random',
            amount: 3
          },
          ease: 'power1.inOut'
        }
      );

      gsap.fromTo(lightPathRef.current, 
        { 
          opacity: 0, 
          scale: 0.5,
          strokeDashoffset: 1000,
        },
        {
          opacity: 1,
          scale: 1,
          strokeDashoffset: 0,
          duration: 4,
          ease: 'power2.inOut'
        }
      );

      
      gsap.fromTo(countdownRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (clientX - centerX) / centerX * 50;
        const moveY = (clientY - centerY) / centerY * 50;

        gsap.to(mountainLeftRef.current, {
          x: moveX * 0.3,
          y: moveY * 0.3,
          duration: 0.5,
          ease: 'power1.out'
        });

        gsap.to(mountainMidRef.current, {
          x: moveX * 0.6,
          y: moveY * 0.6,
          duration: 0.5,
          ease: 'power1.out'
        });

        gsap.to(mountainRightRef.current, {
          x: moveX * 1,
          y: moveY * 1,
          duration: 0.5,
          ease: 'power1.out'
        });
      };

      
      gsap.to(pathWordRef.current, {
        textShadow: '0 0 15px rgba(255, 107, 107, 0.9), 0 0 25px rgba(255, 107, 107, 0.7)',
        color: '#ff4d4d', 
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut'
      });

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        clearInterval(countdownInterval);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 900 600" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A202C" />
            <stop offset="100%" stopColor="#2D3748" />
          </linearGradient>
          
          
          <filter id="glowFilter">
            <feGaussianBlur className="blur" result="coloredBlur" stdDeviation="4"></feGaussianBlur>
            <feSpecularLighting surfaceScale="3" specularConstant="1.2" specularExponent="12" lighting-color="#ff6b6b">
              <fePointLight x="300" y="300" z="200"/>
            </feSpecularLighting>
            <feComposite in="SourceGraphic" in2="coloredBlur" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
          </filter>
        </defs>
        
        
        <rect width="900" height="600" fill="url(#mountainGradient)" />
        
        
        <g ref={starsRef}>
          {stars.map((star, index) => (
            <circle 
              key={index} 
              cx={star.x} 
              cy={star.y} 
              r={star.size} 
              fill="#ffffff" 
              opacity={0}
            />
          ))}
        </g>
        
        
        <path 
          ref={lightPathRef}
          d="M100 500 Q450 200 800 500" 
          stroke="#ff6b6b" 
          strokeWidth="6" 
          fill="none" 
          strokeDasharray="1000"
          filter="url(#glowFilter)"
          className="opacity-70"
        />
        
        
        <path 
          d="M50 550 Q200 400 350 550" 
          stroke="#ff6b6b" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.3"
        />
        <path 
          d="M550 580 Q700 430 850 580" 
          stroke="#ff6b6b" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.3"
        />
        
        
        <path 
          ref={mountainLeftRef}
          d="M242 600L263 590C284 580 326 560 338 540C350 520 332 500 329 480C326 460 338 440 348.5 420C359 400 368 380 360.5 360C353 340 329 320 314 300C299 280 293 260 293 240C293 220 299 200 300.5 180C302 160 299 140 282.5 120C266 100 236 80 230 60C224 40 242 20 251 10L260 0L675 0L670.5 10C666 20 657 40 645 60C633 80 618 100 613.5 120C609 140 615 160 606 180C597 200 573 220 574.5 240C576 260 603 280 615 300C627 320 624 340 616.5 360C609 380 597 400 577.5 420C558 440 531 460 540 480C549 500 594 520 603 540C612 560 585 580 571.5 590L558 600Z"
          fill="#bc2f2d"
          opacity="0.6"
        />
        
        <path 
          ref={mountainMidRef}
          d="M557 600L570.5 590C584 580 611 560 602 540C593 520 548 500 539 480C530 460 557 440 576.5 420C596 400 608 380 615.5 360C623 340 626 320 614 300C602 280 575 260 573.5 240C572 220 596 200 605 180C614 160 608 140 612.5 120C617 100 632 80 644 60C656 40 665 20 669.5 10L674 0L774 0L771 10C768 20 762 40 757.5 60C753 80 750 100 748.5 120C747 140 747 160 729 180C711 200 675 220 670.5 240C666 260 693 280 718.5 300C744 320 768 340 778.5 360C789 380 786 400 762 420C738 440 693 460 694.5 480C696 500 744 520 753 540C762 560 732 580 717 590L702 600Z"
          fill="#971a18"
          opacity="0.4"
        />
        
        <path 
          ref={mountainRightRef}
          d="M701 600L716 590C731 580 761 560 752 540C743 520 695 500 693.5 480C692 460 737 440 761 420C785 400 788 380 777.5 360C767 340 743 320 717.5 300C692 280 665 260 669.5 240C674 220 710 200 728 180C746 160 746 140 747.5 120C749 100 752 80 756.5 60C761 40 767 20 770 10L773 0L900 0L900 10C900 20 900 40 900 60C900 80 900 100 900 120C900 140 900 160 900 180C900 200 900 220 900 240C900 260 900 280 900 300C900 320 900 340 900 360C900 380 900 400 900 420C900 440 900 460 900 480C900 500 900 520 900 540C900 560 900 580 900 590L900 600Z"
          fill="#730000"
          opacity="0.3"
        />
      </svg>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center">
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-[clamp(3rem,10vw,5.5rem)] mt-4 font-light italic font-['Playfair_Display'] tracking-wider"
          >
            Illuminating The <span ref={pathWordRef} className="path-word text-red-500">Path</span>
          </h1>
          
        
          <div 
            ref={countdownRef}
            className="mt-8 flex justify-center space-x-4 text-white"
          >
            <div className="text-center">
              <div className="text-4xl font-bold">{countdown.days} : </div>
              <div className="text-sm">Days</div>
            </div>
            :
            <div className="text-center">
              <div className="text-4xl font-bold">{countdown.hours} : </div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">{countdown.minutes} :</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">{countdown.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MountainSection;