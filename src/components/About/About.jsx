import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./_about.scss";
import Me from "../../assets/img/sead.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  const initAnimation = () => {
    const defaultAnimation = () => {
      return ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        animation: gsap.to(imgRef.current, {
          top: "20%",
          opacity: 0.6,
        }),
      });
    };

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1100px)", () => {
      return defaultAnimation();
    });

    return mm;
  };

  useEffect(() => {
    const mm = initAnimation();

    // Add swinging animation
    const swingAnimation = gsap.to(imgRef.current, {
      rotation: 2,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    return () => {
      mm.revert();
      swingAnimation.kill();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="about " ref={sectionRef}>
      <div className="main-wrap">
        <img className="about__image" src={Me} alt="" ref={imgRef} />
        <div className="about__inner">
          <h2 className="about__title">Outro</h2>
          <div className="about__section">
            <p>
              Over four years ago, what started as a curiosity in the digital
              world quickly became an obsession. The idea that code could
              transform into vibrant, interactive experiences fascinated me.
            </p>
            <p>
              Throughout my career, I've had the opportunity to work with
              diverse organizations, adapting to a wide array of technologies
              and contributing to the development Micro Frontends and
              large-scale web applications.
            </p>
            <p>
              I'm exploring the world of design and learning how to push the
              design and learn how to push the boundaries of web development
              even further by blending aesthetics with functionality.
            </p>
            <div className="about__links">
              <p>
                Feel free to reach out and connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/ssabanovic/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                , check out my{" "}
                <a
                  href="https://github.com/SeadSabanovic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                , or send me an{" "}
                <a href="mailto:sead.sabanovic97@gmail.com">email</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
