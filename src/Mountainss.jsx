import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Mountains.css";

gsap.registerPlugin(ScrollTrigger);

const Mountains = () => {
  useEffect(() => {
    // Ensure DOM is ready before initializing GSAP
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollDist",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          markers: false, // Keep markers off for production
        },
      });

      tl.fromTo(".sky", { y: 0 }, { y: -200 }, 0)
        .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
        .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
        .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
        .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
        .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
        .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);

      // Arrow button animations (matching CodePen exactly)
      const arrowBtn = document.querySelector('#arrow-btn');
      if (arrowBtn) {
        // Mouse enter (hover) - move arrow up 10px
        arrowBtn.addEventListener('mouseenter', () => {
          gsap.to('.arrow', { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' });
        });

        // Mouse leave - return arrow to original position
        arrowBtn.addEventListener('mouseleave', () => {
          gsap.to('.arrow', { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
        });

        // Click - scroll to the bottom of the viewport
        arrowBtn.addEventListener('click', () => {
          gsap.to(window, { scrollTo: window.innerHeight, duration: 1.5, ease: 'power1.inOut' });
        });
      }
    });

    // Cleanup on unmount
    return () => {
      ctx.revert();
      
      // Cleanup event listeners if arrowBtn exists
      const arrowBtn = document.querySelector('#arrow-btn');
      if (arrowBtn) {
        arrowBtn.removeEventListener('mouseenter', null);
        arrowBtn.removeEventListener('mouseleave', null);
        arrowBtn.removeEventListener('click', null);
      }
    };
  }, []);

  return (
    <div className="mountains-container" style={{ height: '200vh', position: 'relative', overflow: 'hidden' }}>
      <div className="scrollDist" style={{ height: '100vh' }}></div>
      <main>
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

          <text fill="#fff" x="200" y="200" fontSize="99" fontFamily="'Montserrat', sans-serif">
            Illuminating The Path
          </text>
          <polyline className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />

          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />
            <text x="412" y="305" fill="#162a43" fontSize="99" fontFamily="'Montserrat', sans-serif">
              00:00:00
            </text>
          </g>

          <rect id="arrow-btn" width="100" height="100" opacity="0" x="550" y="220" style={{ cursor: "pointer" }} />
        </svg>
      </main>
    </div>
  );
};

export default Mountains;