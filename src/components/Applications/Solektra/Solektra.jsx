import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./_solektra.scss";
import Clock from "./Clock/Clock";
import Text1 from "../../../assets/svg/solektra-text-1.svg";
import Text2 from "../../../assets/svg/solektra-text-2.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Solektra() {
  const headerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    gsap.to(header, {
      opacity: 0,
      y: 1300,
      rotate: -90,
      scale: 2,
      scrollTrigger: {
        trigger: header,
        start: "top 20%",
        end: "bottom+=1300 30%",
        scrub: 2,
      },
    });

    // Text animations
    gsap.from(text1, {
      rotate: 20,
      scrollTrigger: {
        trigger: text1,
        start: "top bottom",
        end: "bottom+=500 30%",
        scrub: 2,
      },
    });

    gsap.fromTo(
      text2,
      { rotate: 140 },
      {
        rotate: 0,
        scrollTrigger: {
          trigger: text2,
          start: "top bottom",
          end: "bottom+=500 30%",
          scrub: 3,
        },
      }
    );
  }, []);

  return (
    <div className="solektra">
      <div className="solektra__header" ref={headerRef}>
        <Clock />
        <Text1
          className="solektra__header__text solektra__header__text--1"
          ref={text1Ref}
        />
        <Text2
          className="solektra__header__text solektra__header__text--2"
          ref={text2Ref}
        />
      </div>
      <div className="solektra__content main-wrap">
        <p>
          The app for Solektra, a Croatian company specializing in solar energy
          solutions - is role-based, with two key roles: worker and accountant.
          <br />
          <br />
          Workers can only view and enter their own work hours, while
          accountants have access to view and approve all employees' hours. They
          also handle payroll, review analytics for three sister companies, and
          manage payroll calculations.
        </p>

        <p>
          The app is built using <span>React</span>, incorporating{" "}
          <span>React Hook Form</span> for form handling and <span>Framer</span>{" "}
          for animations. The <span>Context API</span> manages the state, and
          the entire UI was custom-designed for the client to ensure a tailored
          experience.
        </p>
      </div>
    </div>
  );
}
