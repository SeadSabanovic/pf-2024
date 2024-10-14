import "./_intro.scss";
import Statue from "../../assets/img/statue.png";
import Petals from "../../assets/img/petals.png";
import { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const petalsRef = useRef([]);

  useLayoutEffect(() => {
    const textSections = gsap.utils.toArray(".intro__section__text");
    const statue = document.querySelector(".intro__statue");
    const petals = gsap.utils.toArray(".intro__petals");

    textSections.forEach((section, index) => {
      const w = textSections[index];
      const [x, xEnd] =
        index % 2 === 0
          ? [w.scrollWidth * -0.5, 0]
          : [w.scrollWidth * 0.5, section.offsetWidth * -0.5];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 2,
          },
        }
      );
    });

    gsap.to(statue, {
      top: "80%",
      scrollTrigger: {
        trigger: document.querySelector(".intro"),
        scrub: 1,
      },
    });

    gsap.to(petals[0], {
      top: "30%",
      rotate: -2,
      scale: 0.9,
      opacity: 0.7,
      scrollTrigger: {
        trigger: document.querySelector(".intro"),
        scrub: 1,
      },
    });

    gsap.to(petals[1], {
      bottom: "20%",
      opacity: 0.7,
      scrollTrigger: {
        trigger: document.querySelector(".intro"),
        scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      petalsRef.current.forEach((petal, index) => {
        const moveX = (clientX - centerX) / (index === 0 ? 60 : 15);
        const moveY = (clientY - centerY) / (index === 0 ? 60 : 15);

        gsap.to(petal, {
          x: index === 0 ? moveX : -moveX,
          y: moveY,
          duration: 1,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="intro">
      <div className="intro__section">
        <h3 className="intro__section__text">
          BMW DORMAKABA VODAFONE REDBULL SALEWA
        </h3>
        <h3 className="intro__section__text">
          DORMAKABA VODAFONE REDBULL BMW SWISSQUOTE
        </h3>
        <h3 className="intro__section__text">YUH VODAFONE REDBULL SALEWA</h3>
      </div>
      <img src={Statue} alt="" className="intro__statue" />
      <div className="intro__petals-container">
        <img
          ref={(el) => (petalsRef.current[0] = el)}
          src={Petals}
          alt=""
          className="intro__petals intro__petals--1"
        />
        <img
          ref={(el) => (petalsRef.current[1] = el)}
          src={Petals}
          alt=""
          className="intro__petals intro__petals--2"
        />
      </div>
    </div>
  );
}
