import "./_intro.scss";
import Statue from "../../assets/img/statue.png";
import Petals from "../../assets/img/petals.png";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  useLayoutEffect(() => {
    const textSections = gsap.utils.toArray(".intro__section__text");
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
      <img src={Petals} alt="" className="intro__petals intro__petals--1" />
      <img src={Petals} alt="" className="intro__petals intro__petals--2" />
    </div>
  );
}
