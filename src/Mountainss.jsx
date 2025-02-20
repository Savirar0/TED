import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Mountains.css";

gsap.registerPlugin(ScrollTrigger);

const Mountains = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollDist",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.fromTo(".sky", { y: 0 }, { y: -200 }, 0)
      .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
      .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
      .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
      .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
      .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
      .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);
  }, []);

  return (
    <div className="mountains-container">
      <div className="scrollDist"></div>
      <main>
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800" />
            </g>
          </mask>
          <image className="sky" xlinkHref="https://assets.codepen.io/721952/sky.jpg" width="1200" height="590" />
          <image className="mountBg" xlinkHref="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800" />
          <image className="mountMg" xlinkHref="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800" />
          <image className="cloud2" xlinkHref="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800" />
          <image className="mountFg" xlinkHref="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800" />
          <image className="cloud1" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800" />
          <image className="cloud3" xlinkHref="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800" />
        </svg>
      </main>
    </div>
  );
};

export default Mountains;





