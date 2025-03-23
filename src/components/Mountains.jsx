import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "/src/styles/Mountains.css";
import SocialIcon from "../utils/SocialIcon";
import logo from "../assets/logos/ILLUMINAT.png";

//@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

gsap.registerPlugin(ScrollTrigger);

const Mountains = () => {
  const [countdown, setCountdown] = useState("");

  // Speakers data
  const speakers = [
    { name: 'Speaker 1', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker1", linkedin: "https://www.linkedin.com/in/speaker1/" },
    { name: 'Speaker 2', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker2", linkedin: "https://www.linkedin.com/in/speaker2/" },
    { name: 'Speaker 3', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker3", linkedin: "https://www.linkedin.com/in/speaker3/" },
    { name: 'Speaker 4', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker4", linkedin: "https://www.linkedin.com/in/speaker4/" },
    { name: 'Speaker 5', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker5", linkedin: "https://www.linkedin.com/in/speaker5/" },
    { name: 'Speaker 6', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker6", linkedin: "https://www.linkedin.com/in/speaker6/" },
    { name: 'Speaker 7', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker7", linkedin: "https://www.linkedin.com/in/speaker7/" },
    { name: 'Speaker 8', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker8", linkedin: "https://www.linkedin.com/in/speaker8/" },
    { name: 'Speaker 9', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker9", linkedin: "https://www.linkedin.com/in/speaker9/" },
    { name: 'Speaker 10', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker10", linkedin: "https://www.linkedin.com/in/speaker10/" },
    { name: 'Speaker 11', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker11", linkedin: "https://www.linkedin.com/in/speaker11/" },
    { name: 'Speaker 12', img: 'https://via.placeholder.com/150', instagram: "https://www.instagram.com/speaker12", linkedin: "https://www.linkedin.com/in/speaker12/" },
  ];

  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);

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
      //setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

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

  // Speakers navigation functions
  const nextSpeakers = () => {
    setCurrentSpeakerIndex((prev) => 
      prev + 3 < speakers.length ? prev + 1 : prev
    );
  };

  const prevSpeakers = () => {
    setCurrentSpeakerIndex((prev) => 
      prev > 0 ? prev - 1 : prev
    );
  };

  
  const displayedSpeakers = speakers.slice(currentSpeakerIndex, currentSpeakerIndex + 3);

  return (
    <div className="mountains-container" style={{ 
      height: '140vh', //greatest error, gap.
      position: 'relative', 
      overflow: 'hidden' 
    }}>
      {/* Mountain Section */}
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

          <text fill="#2e2e2e" x="50" y="278" fontSize="99" text fontFamily="Orbitron">
          Illuminating the path
          </text>
          {/*<image xlinkHref={logo} x="50" y="178" width="600" height="100" />*/}

          <polyline className="arrow" fill="#fff" points="599,350 599,389 590,379 590,382 600,392 610,382 610,379 601,389 601,350" />

          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />
            <text fill="#ff0000" x="600" y="330" fontSize="99" fontFamily="'Doto', sans-serif" textAnchor="middle">
              {countdown}
            </text>
          </g>

          <rect id="arrow-btn" width="100" height="100" opacity="0" x="550" y="330" style={{ cursor: "pointer" }} />
        </svg>
      </main>
    </div>
  );
};

export default Mountains;