import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./_about.scss";
import Me from "../../assets/img/sead.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const initAnimation = () => {
      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: 1,
        animation: gsap.to(imgRef.current, {
          top: "20%",
          opacity: 0.6,
        }),
      });

      // Swinging animation
      gsap.to(imgRef.current, {
        rotation: 2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        transformOrigin: "top center",
      });

      return scrollTrigger;
    };

    const scrollTrigger = initAnimation();

    // Set up ResizeObserver to refresh ScrollTrigger on height changes
    const resizeObserver = new ResizeObserver(() => {
      scrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    return () => {
      scrollTrigger.kill();
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
