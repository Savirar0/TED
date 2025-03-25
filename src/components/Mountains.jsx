import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Mountains = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    // Countdown logic
    const countdownDate = new Date("May 31, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        setCountdown("Event has started!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days} : ${hours} : ${minutes} : ${seconds}`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mountains-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          markers: false,
        },
      });

      tl.fromTo(".sky", { y: 0 }, { y: -200 }, 0)
        .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
        .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
        .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
        .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
        .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
        .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);

      const arrowBtn = document.querySelector('#arrow-btn');
      if (arrowBtn) {
        arrowBtn.addEventListener('mouseenter', () => {
          gsap.to('.arrow', { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' });
        });

        arrowBtn.addEventListener('mouseleave', () => {
          gsap.to('.arrow', { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
        });

        arrowBtn.addEventListener('click', () => {
          gsap.to(window, { scrollTo: window.innerHeight, duration: 1.5, ease: 'power1.inOut' });
        });
      }
    });

    return () => {
      ctx.revert();

      const arrowBtn = document.querySelector('#arrow-btn');
      if (arrowBtn) {
        arrowBtn.removeEventListener('mouseenter', null);
        arrowBtn.removeEventListener('mouseleave', null);
        arrowBtn.removeEventListener('click', null);
      }
    };
  }, []);

  return (
    <div className="mountains-container" style={{ 
      height: '140vh',
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      <main style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10
      }}>
        <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image
                xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg"
                width="1200"
                height="800"
              />
            </g>
          </mask>

          <image className="sky" xlinkHref="https://assets.codepen.io/721952/sky.jpg" width="1200" height="590" />
          <image className="mountBg" xlinkHref="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800" />
          <image className="mountMg" xlinkHref="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800" />
          <image className="cloud2" xlinkHref="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800" />
          <image className="mountFg" xlinkHref="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800" />
          <image className="cloud1" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800" />
          <image className="cloud3" xlinkHref="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800" />

          {/* Roses text with Tailwind CSS styling */}
          <foreignObject x="0" y="-100" width="1200" height="500">
            <div 
              xmlns="http://www.w3.org/1999/xhtml" 
              className="text-[5rem] text-center h-[90vh] leading-[90vh] text-[#fcedd8] font-bold mb-36"
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: `
                  5px 5px 0px rgb(0, 0, 0),
                  10px 10px 0px rgb(255, 255, 255),
                  10px 10px 0px #3a81b9,
                `
              }}
            >
              ILLUMINATING THE <span style={{ textDecoration: 'underline' }}>PATH</span>
            </div>
          </foreignObject>

          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />
            <text fill="#ff0000" x="600" y="330" fontSize="99" fontFamily="'Orbitron', sans-serif" textAnchor="middle">
              {countdown}
            </text>
            <text fill="#ff0000" x="600" y="600" fontSize="60" fontFamily="'Orbitron', sans-serif" textAnchor="middle">
              Just a few more moments to go
            </text>
          </g>

          <rect id="arrow-btn" width="100" height="100" opacity="0" x="550" y="330" style={{ cursor: "pointer" }} />
        </svg>
      </main>
    </div>
  );
};

export default Mountains;