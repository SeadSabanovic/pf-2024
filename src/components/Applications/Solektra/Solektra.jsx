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

    gsap.fromTo(
      header,
      { rotate: 100 },
      {
        rotate: 0,
        scrollTrigger: {
          trigger: header,
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.to(header, {
      y: 300,
      opacity: 0,
      scrollTrigger: {
        trigger: header,
        start: "center center",
        scrub: 3,
      },
    });

    gsap.fromTo(
      text1,
      { rotate: -20 },
      {
        rotate: 0,
        scrollTrigger: {
          trigger: header,
          start: "top center",
          end: "bottom center",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      text2,
      { rotate: 140 },
      {
        rotate: 0,
        scrollTrigger: {
          trigger: header,
          start: "top center",
          end: "bottom center",
          scrub: 2,
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
        <div className="solektra__content__divider" />
        <div className="solektra__content__text">
          <p>
            Solektra, a Croatian company specializing in solar energy solutions,
            focuses on designing and installing renewable energy systems and I
            developed an app for them to track employee work hours.
          </p>
          <p>
            The app for Solektra is role-based, with two key roles: worker and
            accountant. Workers can only view and enter their own work hours,
            while accountants have access to view and approve all employees'
            hours. They also handle payroll, review analytics for three sister
            companies, and manage payroll calculations.
          </p>
          <p>
            The app is built using React, incorporating React Hook Form for form
            handling and Framer for animations. The Context API manages the
            state, and the entire UI was custom-designed for the client to
            ensure a tailored and interactive experience.
          </p>
          <div className="solektra__content__divider" />
        </div>
      </div>
    </div>
  );
}
